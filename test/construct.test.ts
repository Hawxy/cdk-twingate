import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { TwingateConnector } from '../src';

const mockApp = new App({
  context: {
    '@aws-cdk/aws-apigateway:usagePlanKeyOrderInsensitiveId': true,
    '@aws-cdk/core:stackRelativeExports': true,
    '@aws-cdk/customresources:installLatestAwsSdkDefault': false,
    '@aws-cdk/aws-ec2:restrictDefaultSecurityGroup': true,
    '@aws-cdk/aws-ec2:uniqueImdsv2TemplateName': true,
    '@aws-cdk/aws-ec2:launchTemplateDefaultUserData': true,
  },
});
const env = { region: 'ap-southeast-2', account: '865078226113' };
const stack = new Stack(mockApp, 'MyStack', { env });

const vpc = new Vpc(stack, 'MyVpc');

const secret = Secret.fromSecretNameV2(stack, 'ApiSecrets', 'twingate');

new TwingateConnector(stack, 'Test-Connector', {
  vpc: vpc,
  twingateCredentials: {
    secretsManager: {
      secret: secret,
      accessTokenKey: 'ACCESS_TOKEN',
      refreshTokenKey: 'REFRESH_TOKEN',
    },
  },
});


const template = Template.fromStack(stack);

test('Snapshot', () => {
  expect(template.toJSON()).toMatchSnapshot();
});

