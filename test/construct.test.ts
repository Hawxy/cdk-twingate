import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { TwingateConnector } from '../src';

const mockApp = new App();
const env = { region: 'ap-southeast-2', account: '865078226113' };
const stack = new Stack(mockApp, 'MyStack', { env });

const vpc = new Vpc(stack, 'MyVpc');

const secret = Secret.fromSecretNameV2(stack, 'ApiSecrets', 'twingate');

new TwingateConnector(stack, 'Test-Connector', {
  vpc: vpc,
  twingateCredentials: {
    secretsManager: {
      secret: secret,
      accessToken: 'ACCESS_TOKEN',
      refreshToken: 'REFRESH_TOKEN',
    },
  },
});

const template = Template.fromStack(stack);

test('Snapshot', () => {
  expect(template.toJSON()).toMatchSnapshot();
});

