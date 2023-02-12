[@d4lton/node-backend](../README.md) / [Exports](../modules.md) / Config

# Class: Config

## Table of contents

### Constructors

- [constructor](Config.md#constructor)

### Properties

- [entries](Config.md#entries)

### Methods

- [get](Config.md#get)
- [load](Config.md#load)
- [loadFile](Config.md#loadfile)
- [reset](Config.md#reset)
- [set](Config.md#set)
- [start](Config.md#start)
- [updateConfigFromRedis](Config.md#updateconfigfromredis)

## Constructors

### constructor

• **new Config**()

## Properties

### entries

▪ `Static` **entries**: `any` = `{}`

#### Defined in

[src/config/Config.ts:14](https://github.com/d4lton/node-backend/blob/21f6bb2/src/config/Config.ts#L14)

## Methods

### get

▸ `Static` **get**(`key`, `defaultValue?`): `any`

Get a key's value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue?` | `any` |

#### Returns

`any`

#### Defined in

[src/config/Config.ts:55](https://github.com/d4lton/node-backend/blob/21f6bb2/src/config/Config.ts#L55)

___

### load

▸ `Static` **load**(`entries`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | `any` |

#### Returns

`void`

#### Defined in

[src/config/Config.ts:20](https://github.com/d4lton/node-backend/blob/21f6bb2/src/config/Config.ts#L20)

___

### loadFile

▸ `Static` **loadFile**(`file`): `void`

Load config values from a JSON file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`void`

#### Defined in

[src/config/Config.ts:27](https://github.com/d4lton/node-backend/blob/21f6bb2/src/config/Config.ts#L27)

___

### reset

▸ `Static` **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/config/Config.ts:16](https://github.com/d4lton/node-backend/blob/21f6bb2/src/config/Config.ts#L16)

___

### set

▸ `Static` **set**(`key`, `value`): `void`

Set a key's value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/config/Config.ts:48](https://github.com/d4lton/node-backend/blob/21f6bb2/src/config/Config.ts#L48)

___

### start

▸ `Static` **start**(): `void`

#### Returns

`void`

#### Defined in

[src/config/Config.ts:37](https://github.com/d4lton/node-backend/blob/21f6bb2/src/config/Config.ts#L37)

___

### updateConfigFromRedis

▸ `Static` **updateConfigFromRedis**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`void`

#### Defined in

[src/config/Config.ts:40](https://github.com/d4lton/node-backend/blob/21f6bb2/src/config/Config.ts#L40)
