import { awscdk } from 'projen';
import { UpgradeDependenciesSchedule } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'JT',
  authorAddress: 'Hawxy@users.noreply.github.com',
  cdkVersion: '2.100.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdk-twingate',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/Hawxy/cdk-twingate.git',
  license: 'Apache-2.0',
  stability: 'stable',
  depsUpgradeOptions: { workflowOptions: { schedule: UpgradeDependenciesSchedule.MONTHLY } },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.gitignore.addPatterns('cdk.out/');
project.synth();