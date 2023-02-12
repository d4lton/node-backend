[@d4lton/node-backend](../README.md) / [Exports](../modules.md) / Redis

# Class: Redis

## Table of contents

### Constructors

- [constructor](Redis.md#constructor)

### Properties

- [PRIORITIES](Redis.md#priorities)

### Accessors

- [hostname](Redis.md#hostname)
- [pool](Redis.md#pool)

### Methods

- [brpop](Redis.md#brpop)
- [bzpop](Redis.md#bzpop)
- [cache](Redis.md#cache)
- [del](Redis.md#del)
- [get](Redis.md#get)
- [getLock](Redis.md#getlock)
- [incr](Redis.md#incr)
- [keys](Redis.md#keys)
- [limit](Redis.md#limit)
- [llen](Redis.md#llen)
- [lpos](Redis.md#lpos)
- [lpush](Redis.md#lpush)
- [lrem](Redis.md#lrem)
- [ltrim](Redis.md#ltrim)
- [publish](Redis.md#publish)
- [rpop](Redis.md#rpop)
- [sadd](Redis.md#sadd)
- [scard](Redis.md#scard)
- [set](Redis.md#set)
- [smembers](Redis.md#smembers)
- [spop](Redis.md#spop)
- [srem](Redis.md#srem)
- [subscribe](Redis.md#subscribe)
- [ttl](Redis.md#ttl)
- [unlock](Redis.md#unlock)
- [unsubscribe](Redis.md#unsubscribe)
- [zadd](Redis.md#zadd)
- [zcard](Redis.md#zcard)
- [zpop](Redis.md#zpop)
- [zrangebyscore](Redis.md#zrangebyscore)
- [zrem](Redis.md#zrem)
- [shutdown](Redis.md#shutdown)

## Constructors

### constructor

• **new Redis**()

#### Defined in

[src/redis/Redis.ts:41](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L41)

## Properties

### PRIORITIES

▪ `Static` **PRIORITIES**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `HIGH` | `number` |
| `LOW` | `number` |
| `NORMAL` | `number` |

#### Defined in

[src/redis/Redis.ts:35](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L35)

## Accessors

### hostname

• `get` **hostname**(): `string`

#### Returns

`string`

#### Defined in

[src/redis/Redis.ts:312](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L312)

___

### pool

• `get` **pool**(): [`RedisPool`](RedisPool.md)

#### Returns

[`RedisPool`](RedisPool.md)

#### Defined in

[src/redis/Redis.ts:44](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L44)

## Methods

### brpop

▸ **brpop**(`key`, `timeoutMs?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `timeoutMs` | `number` | `0` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:98](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L98)

___

### bzpop

▸ **bzpop**(`key`, `timeoutMs?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `timeoutMs` | `number` | `0` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:167](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L167)

___

### cache

▸ **cache**(`key`, `expireMs`, `waitMs`, `closure`): `Promise`<`any`\>

Get a cached value, creating it if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `expireMs` | `number` |
| `waitMs` | `number` |
| `closure` | `Function` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:281](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L281)

___

### del

▸ **del**(`key`): `Promise`<`any`\>

Delete a key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:174](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L174)

___

### get

▸ **get**(`key`): `Promise`<`any`\>

Get the value for a key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:51](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L51)

___

### getLock

▸ **getLock**(`key`, `wait?`, `timeoutMs?`, `retrySleepMs?`): `Promise`<`any`\>

Get a lock for a key.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `wait` | `boolean` | `true` |
| `timeoutMs` | `number` | `10000` |
| `retrySleepMs` | `number` | `500` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:247](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L247)

___

### incr

▸ **incr**(`key`, `expireMs?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `expireMs` | `number` | `0` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:308](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L308)

___

### keys

▸ **keys**(`pattern`): `Promise`<`any`\>

Get keys matching a pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:188](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L188)

___

### limit

▸ **limit**(`baseKey`, `limit`, `resolutionMs?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `baseKey` | `string` | `undefined` |
| `limit` | `number` | `undefined` |
| `resolutionMs` | `number` | `1000` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/redis/Redis.ts:300](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L300)

___

### llen

▸ **llen**(`key`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:102](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L102)

___

### lpos

▸ **lpos**(`key`, `value`): `Promise`<`any`\>

Get the position of the first matching element in a list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:83](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L83)

___

### lpush

▸ **lpush**(`key`, `value`): `Promise`<`any`\>

Push a value onto the given list key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:69](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L69)

___

### lrem

▸ **lrem**(`key`, `count`, `value`): `Promise`<`any`\>

Remove one or more matching elements from a list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `count` | `number` |
| `value` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:76](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L76)

___

### ltrim

▸ **ltrim**(`key`, `start`, `end`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `start` | `number` |
| `end` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:106](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L106)

___

### publish

▸ **publish**(`topic`, `message`): `Promise`<`void`\>

Publish an event

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `message` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/redis/Redis.ts:239](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L239)

___

### rpop

▸ **rpop**(`key`, `count?`): `Promise`<`any`\>

Pop value(s) off the given list key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `count?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:90](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L90)

___

### sadd

▸ **sadd**(`key`, `value`): `Promise`<`any`\>

Add a value to a Set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:113](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L113)

___

### scard

▸ **scard**(`key`): `Promise`<`any`\>

Get the number of keys in a Set (aka the Set length).

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:143](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L143)

___

### set

▸ **set**(`key`, `value`, `timeoutMs?`, `exclusive?`): `Promise`<`any`\>

Set the value for a key.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `value` | `any` | `undefined` |
| `timeoutMs` | `number` | `0` |
| `exclusive` | `boolean` | `false` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:58](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L58)

___

### smembers

▸ **smembers**(`key`): `Promise`<`any`\>

Get all values from a Set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:136](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L136)

___

### spop

▸ **spop**(`key`): `Promise`<`any`\>

Remove a random value from a Set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:121](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L121)

___

### srem

▸ **srem**(`key`, `value`): `Promise`<`any`\>

Remove a value from a Set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:128](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L128)

___

### subscribe

▸ **subscribe**(`topic`, `callback`): `Promise`<[`RedisSubscription`](../modules.md#redissubscription)\>

Subscribe to an event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `callback` | [`RedisSubscriptionCallback`](../modules.md#redissubscriptioncallback) |

#### Returns

`Promise`<[`RedisSubscription`](../modules.md#redissubscription)\>

#### Defined in

[src/redis/Redis.ts:195](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L195)

___

### ttl

▸ **ttl**(`key`): `Promise`<`number`\>

Get the time-to-live remaining for a key, if any.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/redis/Redis.ts:181](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L181)

___

### unlock

▸ **unlock**(`lock`): `Promise`<`void`\>

Unlock a lock.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lock` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/redis/Redis.ts:265](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L265)

___

### unsubscribe

▸ **unsubscribe**(`subscription`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscription` | [`RedisSubscription`](../modules.md#redissubscription) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/redis/Redis.ts:219](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L219)

___

### zadd

▸ **zadd**(`key`, `value`, `priority?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `value` | `any` | `undefined` |
| `priority` | `number` | `Redis.PRIORITIES.NORMAL` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:147](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L147)

___

### zcard

▸ **zcard**(`key`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:163](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L163)

___

### zpop

▸ **zpop**(`key`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:151](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L151)

___

### zrangebyscore

▸ **zrangebyscore**(`key`, `priority?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `priority` | `number` | `Redis.PRIORITIES.NORMAL` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:155](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L155)

___

### zrem

▸ **zrem**(`key`, `value`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/Redis.ts:159](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L159)

___

### shutdown

▸ `Static` **shutdown**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/redis/Redis.ts:320](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/Redis.ts#L320)
