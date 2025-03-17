import { awscdk } from 'projen';
import { UpgradeDependenciesSchedule } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'JT',
  authorAddress: 'Hawxy@users.noreply.github.com',
  cdkVersion: '2.100.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'cdk-twingate',
  majorVersion: 1,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/Hawxy/cdk-twingate.git',
  license: 'Apache-2.0',
  stability: 'stable',
  depsUpgradeOptions: { workflowOptions: { schedule: UpgradeDependenciesSchedule.MONTHLY } },
  keywords: [
    'aws',
    'cdk',
    'bastion',
    'twingate',
    'vpc',
  ],
});

project.gitignore.addPatterns('cdk.out/');
project.synth();