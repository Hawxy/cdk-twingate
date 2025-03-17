# cdk-twingate

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Hawxy/cdk-twingate/build.yml?label=Build%20%26%20Release&style=flat-square)
[![npm](https://img.shields.io/npm/v/cdk-twingate?style=flat-square)](https://www.npmjs.com/package/cdk-twingate)

This packages creates an AWS EC2 configured as a Twingate connector. 

Using Twingate to access your VPC permits high performance connectivity whilst avoiding SSH or the overhead & limitations of Session Manager.

## Installation

JS/TS: `npm i cdk-twingate -D`

## Instructions

The Twingate credentials can be passed in via Secrets Manager (Recommended) or as a hardcoded string.

```typescript
import { TailscaleBastion } from 'cdk-tailscale-bastion';

// Secrets Manager
const secret = Secret.fromSecretNameV2(stack, 'ApiSecrets', 'twingate-connector-1');

const bastion = new TwingateConnector(stack, 'TwingateConnector-1', {
  vpc,
  twingateCredentials: {
    secretsManager: {
      secret: secret,
      accessToken: 'ACCESS_TOKEN',
      refreshToken: 'REFRESH_TOKEN',
    },
  },
});

```

Whatever resource you intend to reach should permit connections from the bastion on the relevant port, naturally. 