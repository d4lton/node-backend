[@d4lton/node-backend](README.md) / Exports

# @d4lton/node-backend

## Table of contents

### Classes

- [Config](classes/Config.md)
- [EventSource](classes/EventSource.md)
- [Firebase](classes/Firebase.md)
- [Logging](classes/Logging.md)
- [Package](classes/Package.md)
- [RateLimitError](classes/RateLimitError.md)
- [Redis](classes/Redis.md)
- [RedisPool](classes/RedisPool.md)

### Type Aliases

- [RedisPoolClient](modules.md#redispoolclient)
- [RedisSubscription](modules.md#redissubscription)
- [RedisSubscriptionCallback](modules.md#redissubscriptioncallback)
- [ServerSentEvent](modules.md#serversentevent)

## Type Aliases

### RedisPoolClient

Ƭ **RedisPoolClient**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `client` | `RedisClientType` |
| `id` | `number` |
| `used` | `boolean` |

#### Defined in

[src/redis/RedisPool.ts:13](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/RedisPool.ts#L13)

___

### RedisSubscription

Ƭ **RedisSubscription**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `callback` | [`RedisSubscriptionCallback`](modules.md#redissubscriptioncallback) |
| `id` | `number` |
| `topic` | `string` |

#### Defined in

[src/redis/Redis.ts:16](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L16)

___

### RedisSubscriptionCallback

Ƭ **RedisSubscriptionCallback**: (`message`: `any`, `topic`: `string`) => `void`

#### Type declaration

▸ (`message`, `topic`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `topic` | `string` |

##### Returns

`void`

#### Defined in

[src/redis/Redis.ts:14](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L14)

___

### ServerSentEvent

Ƭ **ServerSentEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `event` | `string` |
| `id?` | `string` \| `number` |

#### Defined in

[src/eventsource/EventSource.ts:10](https://github.com/d4lton/node-backend/blob/21f6bb2/src/eventsource/EventSource.ts#L10)
