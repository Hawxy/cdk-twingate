import {
  AmazonLinuxCpuType,
  Instance,
  InstanceClass,
  InstanceSize,
  InstanceType,
  ISecurityGroup,
  IVpc,
  MachineImage,
  SubnetSelection,
} from 'aws-cdk-lib/aws-ec2';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';

export interface SecretsManagerKeys {
  /**
  * Secret manager location where the twingate auth key is stored. Must be in the standard key/value JSON format.
  */
  readonly secret: ISecret;
  /**
   * The key of the access token value located within the provided secret.
   */
  readonly accessTokenKey: string;
  /**
   * The key of the refresh token value located within the provided secret.
   */
  readonly refreshTokenKey: string;
}

export interface UnsafeStringKeys {
  /**
   * Provides an access token as a plaintext string.
   */
  readonly accessToken: string;

  /**
 * Provides an api key as a plaintext string.
 */
  readonly refreshToken: string;
}

export interface TwingateCredentials {
  /**
   * Fetches the credentials from secrets manager. This value will be fetched during EC2 startup.
   */
  readonly secretsManager?: SecretsManagerKeys;
  /**
   * Provides credentials as plaintext strings.
   * CAUTION: This option will expose the credentials in your CDK template.
   */
  readonly unsafeStringKeys?: UnsafeStringKeys;

}

export interface TwingateConnectorProps {
  /**
    * VPC to launch the instance in.
    */
  readonly vpc: IVpc;
  /**
   * Credential settings for the twingate auth keys. One type must be used.
   */
  readonly twingateCredentials: TwingateCredentials;
  /**
   * In which AZ to place the instance within the VPC.
   *
   * @default - Random zone.
   */
  readonly availabilityZone?: string;
  /**
   * The name of the instance.
   *
   * @default RandomlyGenerated
   */
  readonly instanceName?: string;
  /**
   * Select the subnets to run the EC2 in.
   * PRIVATE subnets are used by default for security purposes.
   *
   * @default - PRIVATE subnets of the supplied VPC
   */
  readonly subnetSelection?: SubnetSelection;
  /**
   * Security Group to assign to this instance.
   *
   * @default - Creates a new security group with all outbound traffic permitted.
   */
  readonly securityGroup?: ISecurityGroup;
  /**
   * Type of instance to launch.
   *
   * @default 't3a.micro'
   */
  readonly instanceType?: InstanceType;
  /**
   *  CPU Type of the instance.
   *
   *  @default AmazonLinuxCpuType.X86_64
   */
  readonly cpuType?: AmazonLinuxCpuType;
}

enum CredentialType {
  AccessToken,
  RefreshToken
}

export class TwingateConnector extends Construct {
  readonly bastion: Instance;
  constructor(scope: Construct, id: string, props: TwingateConnectorProps) {
    super(scope, id);

    const {
      twingateCredentials,
      vpc,
      availabilityZone,
      instanceName,
      subnetSelection,
      securityGroup,
      instanceType,
    } = props;

    const userData = [
      'sudo mkdir -p /etc/twingate/',
      'sudo snap install aws-cli --classic',
      'echo TWINGATE_URL="https://inxsoftware.twingate.com" > /etc/twingate/connector.conf',
      `echo TWINGATE_ACCESS_TOKEN=${this.computeCredentials(twingateCredentials, CredentialType.AccessToken)} >> /etc/twingate/connector.conf`,
      `echo TWINGATE_REFRESH_TOKEN=${this.computeCredentials(twingateCredentials, CredentialType.RefreshToken)} >> /etc/twingate/connector.conf`,
      'echo TWINGATE_LABEL_HOSTNAME=$(curl http://169.254.169.254/latest/meta-data/local-hostname)',
      'sudo systemctl enable --now twingate-connector',
    ];

    const bastion = new Instance(this, 'TwingateHost', {
      vpc: vpc,
      vpcSubnets: subnetSelection,
      securityGroup: securityGroup,
      availabilityZone: availabilityZone,
      instanceName: instanceName,
      instanceType: instanceType ?? InstanceType.of(InstanceClass.T3A, InstanceSize.MICRO),
      machineImage: MachineImage.lookup({
        name: 'twingate/images/hvm-ssd/twingate-amd64-*',
        windows: false,
      }),
      userDataCausesReplacement: true,
      requireImdsv2: true,
      ssmSessionPermissions: true,
    });

    bastion.userData.addCommands(...userData);

    if (twingateCredentials.secretsManager) {
      twingateCredentials.secretsManager.secret.grantRead(bastion);
    }

    this.bastion = bastion;

  }

  private computeCredentials(credentials: TwingateCredentials, credentialType: CredentialType) {
    if (credentials.unsafeStringKeys) {
      return credentialType == CredentialType.AccessToken
        ? credentials.unsafeStringKeys.accessToken
        : credentials.unsafeStringKeys.refreshToken;
    } else if (credentials.secretsManager) {
      const sm = credentials.secretsManager;
      const lookup = credentialType == CredentialType.AccessToken ? sm.accessTokenKey : sm.refreshTokenKey;
      return `$(aws secretsmanager get-secret-value --region ${sm.secret.env.region} --secret-id ${sm.secret.secretArn} --query SecretString --output text | jq '."${lookup}"')`;
    } else {
      throw new Error('No Twingate credentials set');
    }
  }
}