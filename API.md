# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TwingateConnector <a name="TwingateConnector" id="cdk-twingate.TwingateConnector"></a>

#### Initializers <a name="Initializers" id="cdk-twingate.TwingateConnector.Initializer"></a>

```typescript
import { TwingateConnector } from 'cdk-twingate'

new TwingateConnector(scope: Construct, id: string, props: TwingateConnectorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-twingate.TwingateConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-twingate.TwingateConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-twingate.TwingateConnector.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-twingate.TwingateConnectorProps">TwingateConnectorProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-twingate.TwingateConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-twingate.TwingateConnector.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-twingate.TwingateConnector.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-twingate.TwingateConnectorProps">TwingateConnectorProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-twingate.TwingateConnector.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-twingate.TwingateConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-twingate.TwingateConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-twingate.TwingateConnector.isConstruct"></a>

```typescript
import { TwingateConnector } from 'cdk-twingate'

TwingateConnector.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-twingate.TwingateConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-twingate.TwingateConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-twingate.TwingateConnector.property.bastion">bastion</a></code> | <code>aws-cdk-lib.aws_ec2.Instance</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-twingate.TwingateConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bastion`<sup>Required</sup> <a name="bastion" id="cdk-twingate.TwingateConnector.property.bastion"></a>

```typescript
public readonly bastion: Instance;
```

- *Type:* aws-cdk-lib.aws_ec2.Instance

---


## Structs <a name="Structs" id="Structs"></a>

### SecretsManagerKeys <a name="SecretsManagerKeys" id="cdk-twingate.SecretsManagerKeys"></a>

#### Initializer <a name="Initializer" id="cdk-twingate.SecretsManagerKeys.Initializer"></a>

```typescript
import { SecretsManagerKeys } from 'cdk-twingate'

const secretsManagerKeys: SecretsManagerKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-twingate.SecretsManagerKeys.property.accessTokenKey">accessTokenKey</a></code> | <code>string</code> | The key of the access token value located within the provided secret. |
| <code><a href="#cdk-twingate.SecretsManagerKeys.property.refreshTokenKey">refreshTokenKey</a></code> | <code>string</code> | The key of the refresh token value located within the provided secret. |
| <code><a href="#cdk-twingate.SecretsManagerKeys.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | Secret manager location where the twingate auth key is stored. |

---

##### `accessTokenKey`<sup>Required</sup> <a name="accessTokenKey" id="cdk-twingate.SecretsManagerKeys.property.accessTokenKey"></a>

```typescript
public readonly accessTokenKey: string;
```

- *Type:* string

The key of the access token value located within the provided secret.

---

##### `refreshTokenKey`<sup>Required</sup> <a name="refreshTokenKey" id="cdk-twingate.SecretsManagerKeys.property.refreshTokenKey"></a>

```typescript
public readonly refreshTokenKey: string;
```

- *Type:* string

The key of the refresh token value located within the provided secret.

---

##### `secret`<sup>Required</sup> <a name="secret" id="cdk-twingate.SecretsManagerKeys.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

Secret manager location where the twingate auth key is stored.

Must be in the standard key/value JSON format.

---

### TwingateConnectorProps <a name="TwingateConnectorProps" id="cdk-twingate.TwingateConnectorProps"></a>

#### Initializer <a name="Initializer" id="cdk-twingate.TwingateConnectorProps.Initializer"></a>

```typescript
import { TwingateConnectorProps } from 'cdk-twingate'

const twingateConnectorProps: TwingateConnectorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-twingate.TwingateConnectorProps.property.twingateCredentials">twingateCredentials</a></code> | <code><a href="#cdk-twingate.TwingateCredentials">TwingateCredentials</a></code> | Credential settings for the twingate auth keys. |
| <code><a href="#cdk-twingate.TwingateConnectorProps.property.twingateDomain">twingateDomain</a></code> | <code>string</code> | The full domain of your Twingate instance, ie https://mycompany.twingate.com. |
| <code><a href="#cdk-twingate.TwingateConnectorProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC to launch the instance in. |
| <code><a href="#cdk-twingate.TwingateConnectorProps.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | In which AZ to place the instance within the VPC. |
| <code><a href="#cdk-twingate.TwingateConnectorProps.property.cpuType">cpuType</a></code> | <code>aws-cdk-lib.aws_ec2.AmazonLinuxCpuType</code> | CPU Type of the instance. |
| <code><a href="#cdk-twingate.TwingateConnectorProps.property.instanceName">instanceName</a></code> | <code>string</code> | The name of the instance. |
| <code><a href="#cdk-twingate.TwingateConnectorProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | Type of instance to launch. |
| <code><a href="#cdk-twingate.TwingateConnectorProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security Group to assign to this instance. |
| <code><a href="#cdk-twingate.TwingateConnectorProps.property.subnetSelection">subnetSelection</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Select the subnets to run the EC2 in. |

---

##### `twingateCredentials`<sup>Required</sup> <a name="twingateCredentials" id="cdk-twingate.TwingateConnectorProps.property.twingateCredentials"></a>

```typescript
public readonly twingateCredentials: TwingateCredentials;
```

- *Type:* <a href="#cdk-twingate.TwingateCredentials">TwingateCredentials</a>

Credential settings for the twingate auth keys.

One type must be used.

---

##### `twingateDomain`<sup>Required</sup> <a name="twingateDomain" id="cdk-twingate.TwingateConnectorProps.property.twingateDomain"></a>

```typescript
public readonly twingateDomain: string;
```

- *Type:* string

The full domain of your Twingate instance, ie https://mycompany.twingate.com.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-twingate.TwingateConnectorProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC to launch the instance in.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="cdk-twingate.TwingateConnectorProps.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string
- *Default:* Random zone.

In which AZ to place the instance within the VPC.

---

##### `cpuType`<sup>Optional</sup> <a name="cpuType" id="cdk-twingate.TwingateConnectorProps.property.cpuType"></a>

```typescript
public readonly cpuType: AmazonLinuxCpuType;
```

- *Type:* aws-cdk-lib.aws_ec2.AmazonLinuxCpuType
- *Default:* AmazonLinuxCpuType.X86_64

CPU Type of the instance.

---

##### `instanceName`<sup>Optional</sup> <a name="instanceName" id="cdk-twingate.TwingateConnectorProps.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string
- *Default:* RandomlyGenerated

The name of the instance.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="cdk-twingate.TwingateConnectorProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* 't3a.micro'

Type of instance to launch.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="cdk-twingate.TwingateConnectorProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* Creates a new security group with all outbound traffic permitted.

Security Group to assign to this instance.

---

##### `subnetSelection`<sup>Optional</sup> <a name="subnetSelection" id="cdk-twingate.TwingateConnectorProps.property.subnetSelection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* PRIVATE subnets of the supplied VPC

Select the subnets to run the EC2 in.

PRIVATE subnets are used by default for security purposes.

---

### TwingateCredentials <a name="TwingateCredentials" id="cdk-twingate.TwingateCredentials"></a>

#### Initializer <a name="Initializer" id="cdk-twingate.TwingateCredentials.Initializer"></a>

```typescript
import { TwingateCredentials } from 'cdk-twingate'

const twingateCredentials: TwingateCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-twingate.TwingateCredentials.property.secretsManager">secretsManager</a></code> | <code><a href="#cdk-twingate.SecretsManagerKeys">SecretsManagerKeys</a></code> | Fetches the credentials from secrets manager. |
| <code><a href="#cdk-twingate.TwingateCredentials.property.unsafeStringKeys">unsafeStringKeys</a></code> | <code><a href="#cdk-twingate.UnsafeStringKeys">UnsafeStringKeys</a></code> | Provides credentials as plaintext strings. |

---

##### `secretsManager`<sup>Optional</sup> <a name="secretsManager" id="cdk-twingate.TwingateCredentials.property.secretsManager"></a>

```typescript
public readonly secretsManager: SecretsManagerKeys;
```

- *Type:* <a href="#cdk-twingate.SecretsManagerKeys">SecretsManagerKeys</a>

Fetches the credentials from secrets manager.

This value will be fetched during EC2 startup.

---

##### `unsafeStringKeys`<sup>Optional</sup> <a name="unsafeStringKeys" id="cdk-twingate.TwingateCredentials.property.unsafeStringKeys"></a>

```typescript
public readonly unsafeStringKeys: UnsafeStringKeys;
```

- *Type:* <a href="#cdk-twingate.UnsafeStringKeys">UnsafeStringKeys</a>

Provides credentials as plaintext strings.

CAUTION: This option will expose the credentials in your CDK template.

---

### UnsafeStringKeys <a name="UnsafeStringKeys" id="cdk-twingate.UnsafeStringKeys"></a>

#### Initializer <a name="Initializer" id="cdk-twingate.UnsafeStringKeys.Initializer"></a>

```typescript
import { UnsafeStringKeys } from 'cdk-twingate'

const unsafeStringKeys: UnsafeStringKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-twingate.UnsafeStringKeys.property.accessToken">accessToken</a></code> | <code>string</code> | Provides an access token as a plaintext string. |
| <code><a href="#cdk-twingate.UnsafeStringKeys.property.refreshToken">refreshToken</a></code> | <code>string</code> | Provides an api key as a plaintext string. |

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="cdk-twingate.UnsafeStringKeys.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Provides an access token as a plaintext string.

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="cdk-twingate.UnsafeStringKeys.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

Provides an api key as a plaintext string.

---



