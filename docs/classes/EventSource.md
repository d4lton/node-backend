[@d4lton/node-backend](../README.md) / [Exports](../modules.md) / EventSource

# Class: EventSource

## Hierarchy

- `EventTarget`

  ↳ **`EventSource`**

## Table of contents

### Constructors

- [constructor](EventSource.md#constructor)

### Properties

- [request](EventSource.md#request)
- [response](EventSource.md#response)

### Accessors

- [connected](EventSource.md#connected)
- [controller](EventSource.md#controller)

### Methods

- [addEventListener](EventSource.md#addeventlistener)
- [dispatchEvent](EventSource.md#dispatchevent)
- [ping](EventSource.md#ping)
- [removeEventListener](EventSource.md#removeeventlistener)
- [sendEvent](EventSource.md#sendevent)
- [stop](EventSource.md#stop)
- [makeEvent](EventSource.md#makeevent)
- [makePingEvent](EventSource.md#makepingevent)

## Constructors

### constructor

• **new EventSource**(`request`, `response`, `timeout?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `request` | `any` | `undefined` |
| `response` | `any` | `undefined` |
| `timeout` | `string` | `"5m"` |

#### Overrides

EventTarget.constructor

#### Defined in

[src/eventsource/EventSource.ts:21](https://github.com/d4lton/node-backend/blob/21f6bb2/src/eventsource/EventSource.ts#L21)

## Properties

### request

• **request**: `any`

#### Defined in

[src/eventsource/EventSource.ts:21](https://github.com/d4lton/node-backend/blob/21f6bb2/src/eventsource/EventSource.ts#L21)

___

### response

• **response**: `any`

#### Defined in

[src/eventsource/EventSource.ts:21](https://github.com/d4lton/node-backend/blob/21f6bb2/src/eventsource/EventSource.ts#L21)

## Accessors

### connected

• `get` **connected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/eventsource/EventSource.ts:45](https://github.com/d4lton/node-backend/blob/21f6bb2/src/eventsource/EventSource.ts#L45)

___

### controller

• `get` **controller**(): `AbortController`

#### Returns

`AbortController`

#### Defined in

[src/eventsource/EventSource.ts:49](https://github.com/d4lton/node-backend/blob/21f6bb2/src/eventsource/EventSource.ts#L49)

## Methods

### addEventListener

▸ **addEventListener**(`type`, `callback`, `options?`): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5307

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5309

___

### ping

▸ **ping**(): `void`

#### Returns

`void`

#### Defined in

[src/eventsource/EventSource.ts:58](https://github.com/d4lton/node-backend/blob/21f6bb2/src/eventsource/EventSource.ts#L58)

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5311

___

### sendEvent

▸ **sendEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`ServerSentEvent`](../modules.md#serversentevent) |

#### Returns

`void`

#### Defined in

[src/eventsource/EventSource.ts:53](https://github.com/d4lton/node-backend/blob/21f6bb2/src/eventsource/EventSource.ts#L53)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[src/eventsource/EventSource.ts:31](https://github.com/d4lton/node-backend/blob/21f6bb2/src/eventsource/EventSource.ts#L31)

___

### makeEvent

▸ `Static` **makeEvent**(`topic`, `data`, `id?`): [`ServerSentEvent`](../modules.md#serversentevent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `data` | `any` |
| `id?` | `string` \| `number` |

#### Returns

[`ServerSentEvent`](../modules.md#serversentevent)

#### Defined in

[src/eventsource/EventSource.ts:62](https://github.com/d4lton/node-backend/blob/21f6bb2/src/eventsource/EventSource.ts#L62)

___

### makePingEvent

▸ `Static` **makePingEvent**(): [`ServerSentEvent`](../modules.md#serversentevent)

#### Returns

[`ServerSentEvent`](../modules.md#serversentevent)

#### Defined in

[src/eventsource/EventSource.ts:71](https://github.com/d4lton/node-backend/blob/21f6bb2/src/eventsource/EventSource.ts#L71)
