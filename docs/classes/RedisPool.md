[@d4lton/node-backend](../README.md) / [Exports](../modules.md) / RedisPool

# Class: RedisPool

## Table of contents

### Constructors

- [constructor](RedisPool.md#constructor)

### Accessors

- [client](RedisPool.md#client)
- [config](RedisPool.md#config)

### Methods

- [acquire](RedisPool.md#acquire)
- [release](RedisPool.md#release)
- [shutdown](RedisPool.md#shutdown)
- [withClient](RedisPool.md#withclient)

## Constructors

### constructor

• **new RedisPool**()

#### Defined in

[src/redis/RedisPool.ts:25](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/RedisPool.ts#L25)

## Accessors

### client

• `Static` `get` **client**(): `Promise`<`RedisClientType`<{ `bf`: { `ADD`: `__module` ; `CARD`: `__module` ; `EXISTS`: `__module` ; `INFO`: `__module` ; `INSERT`: `__module` ; `LOADCHUNK`: `__module` ; `MADD`: `__module` ; `MEXISTS`: `__module` ; `RESERVE`: `__module` ; `SCANDUMP`: `__module` ; `add`: `__module` ; `card`: `__module` ; `exists`: `__module` ; `info`: `__module` ; `insert`: `__module` ; `loadChunk`: `__module` ; `mAdd`: `__module` ; `mExists`: `__module` ; `reserve`: `__module` ; `scanDump`: `__module`  } ; `cf`: { `ADD`: `__module` ; `ADDNX`: `__module` ; `COUNT`: `__module` ; `DEL`: `__module` ; `EXISTS`: `__module` ; `INFO`: `__module` ; `INSERT`: `__module` ; `INSERTNX`: `__module` ; `LOADCHUNK`: `__module` ; `RESERVE`: `__module` ; `SCANDUMP`: `__module` ; `add`: `__module` ; `addNX`: `__module` ; `count`: `__module` ; `del`: `__module` ; `exists`: `__module` ; `info`: `__module` ; `insert`: `__module` ; `insertNX`: `__module` ; `loadChunk`: `__module` ; `reserve`: `__module` ; `scanDump`: `__module`  } ; `cms`: { `INCRBY`: `__module` ; `INFO`: `__module` ; `INITBYDIM`: `__module` ; `INITBYPROB`: `__module` ; `MERGE`: `__module` ; `QUERY`: `__module` ; `incrBy`: `__module` ; `info`: `__module` ; `initByDim`: `__module` ; `initByProb`: `__module` ; `merge`: `__module` ; `query`: `__module`  } ; `ft`: { `AGGREGATE`: `__module` ; `AGGREGATE_WITHCURSOR`: `__module` ; `ALIASADD`: `__module` ; `ALIASDEL`: `__module` ; `ALIASUPDATE`: `__module` ; `ALTER`: `__module` ; `CONFIG_GET`: `__module` ; `CONFIG_SET`: `__module` ; `CREATE`: `__module` ; `CURSOR_DEL`: `__module` ; `CURSOR_READ`: `__module` ; `DICTADD`: `__module` ; `DICTDEL`: `__module` ; `DICTDUMP`: `__module` ; `DROPINDEX`: `__module` ; `EXPLAIN`: `__module` ; `EXPLAINCLI`: `__module` ; `INFO`: `__module` ; `PROFILEAGGREGATE`: `__module` ; `PROFILESEARCH`: `__module` ; `SEARCH`: `__module` ; `SPELLCHECK`: `__module` ; `SUGADD`: `__module` ; `SUGDEL`: `__module` ; `SUGGET`: `__module` ; `SUGGET_WITHPAYLOADS`: `__module` ; `SUGGET_WITHSCORES`: `__module` ; `SUGGET_WITHSCORES_WITHPAYLOADS`: `__module` ; `SUGLEN`: `__module` ; `SYNDUMP`: `__module` ; `SYNUPDATE`: `__module` ; `TAGVALS`: `__module` ; `_LIST`: `__module` ; `_list`: `__module` ; `aggregate`: `__module` ; `aggregateWithCursor`: `__module` ; `aliasAdd`: `__module` ; `aliasDel`: `__module` ; `aliasUpdate`: `__module` ; `alter`: `__module` ; `configGet`: `__module` ; `configSet`: `__module` ; `create`: `__module` ; `cursorDel`: `__module` ; `cursorRead`: `__module` ; `dictAdd`: `__module` ; `dictDel`: `__module` ; `dictDump`: `__module` ; `dropIndex`: `__module` ; `explain`: `__module` ; `explainCli`: `__module` ; `info`: `__module` ; `profileAggregate`: `__module` ; `profileSearch`: `__module` ; `search`: `__module` ; `spellCheck`: `__module` ; `sugAdd`: `__module` ; `sugDel`: `__module` ; `sugGet`: `__module` ; `sugGetWithPayloads`: `__module` ; `sugGetWithScores`: `__module` ; `sugGetWithScoresWithPayloads`: `__module` ; `sugLen`: `__module` ; `synDump`: `__module` ; `synUpdate`: `__module` ; `tagVals`: `__module`  } ; `graph`: { `CONFIG_GET`: `__module` ; `CONFIG_SET`: `__module` ; `DELETE`: `__module` ; `EXPLAIN`: `__module` ; `LIST`: `__module` ; `PROFILE`: `__module` ; `QUERY`: `__module` ; `RO_QUERY`: `__module` ; `SLOWLOG`: `__module` ; `configGet`: `__module` ; `configSet`: `__module` ; `delete`: `__module` ; `explain`: `__module` ; `list`: `__module` ; `profile`: `__module` ; `query`: `__module` ; `roQuery`: `__module` ; `slowLog`: `__module`  } ; `json`: { `ARRAPPEND`: `__module` ; `ARRINDEX`: `__module` ; `ARRINSERT`: `__module` ; `ARRLEN`: `__module` ; `ARRPOP`: `__module` ; `ARRTRIM`: `__module` ; `DEBUG_MEMORY`: `__module` ; `DEL`: `__module` ; `FORGET`: `__module` ; `GET`: `__module` ; `MGET`: `__module` ; `NUMINCRBY`: `__module` ; `NUMMULTBY`: `__module` ; `OBJKEYS`: `__module` ; `OBJLEN`: `__module` ; `RESP`: `__module` ; `SET`: `__module` ; `STRAPPEND`: `__module` ; `STRLEN`: `__module` ; `TYPE`: `__module` ; `arrAppend`: `__module` ; `arrIndex`: `__module` ; `arrInsert`: `__module` ; `arrLen`: `__module` ; `arrPop`: `__module` ; `arrTrim`: `__module` ; `debugMemory`: `__module` ; `del`: `__module` ; `forget`: `__module` ; `get`: `__module` ; `mGet`: `__module` ; `numIncrBy`: `__module` ; `numMultBy`: `__module` ; `objKeys`: `__module` ; `objLen`: `__module` ; `resp`: `__module` ; `set`: `__module` ; `strAppend`: `__module` ; `strLen`: `__module` ; `type`: `__module`  } ; `tDigest`: { `ADD`: `__module` ; `BYRANK`: `__module` ; `BYREVRANK`: `__module` ; `CDF`: `__module` ; `CREATE`: `__module` ; `INFO`: `__module` ; `MAX`: `__module` ; `MERGE`: `__module` ; `MIN`: `__module` ; `QUANTILE`: `__module` ; `RANK`: `__module` ; `RESET`: `__module` ; `REVRANK`: `__module` ; `TRIMMED_MEAN`: `__module` ; `add`: `__module` ; `byRank`: `__module` ; `byRevRank`: `__module` ; `cdf`: `__module` ; `create`: `__module` ; `info`: `__module` ; `max`: `__module` ; `merge`: `__module` ; `min`: `__module` ; `quantile`: `__module` ; `rank`: `__module` ; `reset`: `__module` ; `revRank`: `__module` ; `trimmedMean`: `__module`  } ; `topK`: { `ADD`: `__module` ; `COUNT`: `__module` ; `INCRBY`: `__module` ; `INFO`: `__module` ; `LIST`: `__module` ; `LIST_WITHCOUNT`: `__module` ; `QUERY`: `__module` ; `RESERVE`: `__module` ; `add`: `__module` ; `count`: `__module` ; `incrBy`: `__module` ; `info`: `__module` ; `list`: `__module` ; `listWithCount`: `__module` ; `query`: `__module` ; `reserve`: `__module`  } ; `ts`: { `ADD`: `__module` ; `ALTER`: `__module` ; `CREATE`: `__module` ; `CREATERULE`: `__module` ; `DECRBY`: `__module` ; `DEL`: `__module` ; `DELETERULE`: `__module` ; `GET`: `__module` ; `INCRBY`: `__module` ; `INFO`: `__module` ; `INFO_DEBUG`: `__module` ; `MADD`: `__module` ; `MGET`: `__module` ; `MGET_WITHLABELS`: `__module` ; `MRANGE`: `__module` ; `MRANGE_WITHLABELS`: `__module` ; `MREVRANGE`: `__module` ; `MREVRANGE_WITHLABELS`: `__module` ; `QUERYINDEX`: `__module` ; `RANGE`: `__module` ; `REVRANGE`: `__module` ; `add`: `__module` ; `alter`: `__module` ; `create`: `__module` ; `createRule`: `__module` ; `decrBy`: `__module` ; `del`: `__module` ; `deleteRule`: `__module` ; `get`: `__module` ; `incrBy`: `__module` ; `info`: `__module` ; `infoDebug`: `__module` ; `mAdd`: `__module` ; `mGet`: `__module` ; `mGetWithLabels`: `__module` ; `mRange`: `__module` ; `mRangeWithLabels`: `__module` ; `mRevRange`: `__module` ; `mRevRangeWithLabels`: `__module` ; `queryIndex`: `__module` ; `range`: `__module` ; `revRange`: `__module`  }  }, `Record`<`string`, `never`\>, `Record`<`string`, `never`\>\>\>

#### Returns

`Promise`<`RedisClientType`<{ `bf`: { `ADD`: `__module` ; `CARD`: `__module` ; `EXISTS`: `__module` ; `INFO`: `__module` ; `INSERT`: `__module` ; `LOADCHUNK`: `__module` ; `MADD`: `__module` ; `MEXISTS`: `__module` ; `RESERVE`: `__module` ; `SCANDUMP`: `__module` ; `add`: `__module` ; `card`: `__module` ; `exists`: `__module` ; `info`: `__module` ; `insert`: `__module` ; `loadChunk`: `__module` ; `mAdd`: `__module` ; `mExists`: `__module` ; `reserve`: `__module` ; `scanDump`: `__module`  } ; `cf`: { `ADD`: `__module` ; `ADDNX`: `__module` ; `COUNT`: `__module` ; `DEL`: `__module` ; `EXISTS`: `__module` ; `INFO`: `__module` ; `INSERT`: `__module` ; `INSERTNX`: `__module` ; `LOADCHUNK`: `__module` ; `RESERVE`: `__module` ; `SCANDUMP`: `__module` ; `add`: `__module` ; `addNX`: `__module` ; `count`: `__module` ; `del`: `__module` ; `exists`: `__module` ; `info`: `__module` ; `insert`: `__module` ; `insertNX`: `__module` ; `loadChunk`: `__module` ; `reserve`: `__module` ; `scanDump`: `__module`  } ; `cms`: { `INCRBY`: `__module` ; `INFO`: `__module` ; `INITBYDIM`: `__module` ; `INITBYPROB`: `__module` ; `MERGE`: `__module` ; `QUERY`: `__module` ; `incrBy`: `__module` ; `info`: `__module` ; `initByDim`: `__module` ; `initByProb`: `__module` ; `merge`: `__module` ; `query`: `__module`  } ; `ft`: { `AGGREGATE`: `__module` ; `AGGREGATE_WITHCURSOR`: `__module` ; `ALIASADD`: `__module` ; `ALIASDEL`: `__module` ; `ALIASUPDATE`: `__module` ; `ALTER`: `__module` ; `CONFIG_GET`: `__module` ; `CONFIG_SET`: `__module` ; `CREATE`: `__module` ; `CURSOR_DEL`: `__module` ; `CURSOR_READ`: `__module` ; `DICTADD`: `__module` ; `DICTDEL`: `__module` ; `DICTDUMP`: `__module` ; `DROPINDEX`: `__module` ; `EXPLAIN`: `__module` ; `EXPLAINCLI`: `__module` ; `INFO`: `__module` ; `PROFILEAGGREGATE`: `__module` ; `PROFILESEARCH`: `__module` ; `SEARCH`: `__module` ; `SPELLCHECK`: `__module` ; `SUGADD`: `__module` ; `SUGDEL`: `__module` ; `SUGGET`: `__module` ; `SUGGET_WITHPAYLOADS`: `__module` ; `SUGGET_WITHSCORES`: `__module` ; `SUGGET_WITHSCORES_WITHPAYLOADS`: `__module` ; `SUGLEN`: `__module` ; `SYNDUMP`: `__module` ; `SYNUPDATE`: `__module` ; `TAGVALS`: `__module` ; `_LIST`: `__module` ; `_list`: `__module` ; `aggregate`: `__module` ; `aggregateWithCursor`: `__module` ; `aliasAdd`: `__module` ; `aliasDel`: `__module` ; `aliasUpdate`: `__module` ; `alter`: `__module` ; `configGet`: `__module` ; `configSet`: `__module` ; `create`: `__module` ; `cursorDel`: `__module` ; `cursorRead`: `__module` ; `dictAdd`: `__module` ; `dictDel`: `__module` ; `dictDump`: `__module` ; `dropIndex`: `__module` ; `explain`: `__module` ; `explainCli`: `__module` ; `info`: `__module` ; `profileAggregate`: `__module` ; `profileSearch`: `__module` ; `search`: `__module` ; `spellCheck`: `__module` ; `sugAdd`: `__module` ; `sugDel`: `__module` ; `sugGet`: `__module` ; `sugGetWithPayloads`: `__module` ; `sugGetWithScores`: `__module` ; `sugGetWithScoresWithPayloads`: `__module` ; `sugLen`: `__module` ; `synDump`: `__module` ; `synUpdate`: `__module` ; `tagVals`: `__module`  } ; `graph`: { `CONFIG_GET`: `__module` ; `CONFIG_SET`: `__module` ; `DELETE`: `__module` ; `EXPLAIN`: `__module` ; `LIST`: `__module` ; `PROFILE`: `__module` ; `QUERY`: `__module` ; `RO_QUERY`: `__module` ; `SLOWLOG`: `__module` ; `configGet`: `__module` ; `configSet`: `__module` ; `delete`: `__module` ; `explain`: `__module` ; `list`: `__module` ; `profile`: `__module` ; `query`: `__module` ; `roQuery`: `__module` ; `slowLog`: `__module`  } ; `json`: { `ARRAPPEND`: `__module` ; `ARRINDEX`: `__module` ; `ARRINSERT`: `__module` ; `ARRLEN`: `__module` ; `ARRPOP`: `__module` ; `ARRTRIM`: `__module` ; `DEBUG_MEMORY`: `__module` ; `DEL`: `__module` ; `FORGET`: `__module` ; `GET`: `__module` ; `MGET`: `__module` ; `NUMINCRBY`: `__module` ; `NUMMULTBY`: `__module` ; `OBJKEYS`: `__module` ; `OBJLEN`: `__module` ; `RESP`: `__module` ; `SET`: `__module` ; `STRAPPEND`: `__module` ; `STRLEN`: `__module` ; `TYPE`: `__module` ; `arrAppend`: `__module` ; `arrIndex`: `__module` ; `arrInsert`: `__module` ; `arrLen`: `__module` ; `arrPop`: `__module` ; `arrTrim`: `__module` ; `debugMemory`: `__module` ; `del`: `__module` ; `forget`: `__module` ; `get`: `__module` ; `mGet`: `__module` ; `numIncrBy`: `__module` ; `numMultBy`: `__module` ; `objKeys`: `__module` ; `objLen`: `__module` ; `resp`: `__module` ; `set`: `__module` ; `strAppend`: `__module` ; `strLen`: `__module` ; `type`: `__module`  } ; `tDigest`: { `ADD`: `__module` ; `BYRANK`: `__module` ; `BYREVRANK`: `__module` ; `CDF`: `__module` ; `CREATE`: `__module` ; `INFO`: `__module` ; `MAX`: `__module` ; `MERGE`: `__module` ; `MIN`: `__module` ; `QUANTILE`: `__module` ; `RANK`: `__module` ; `RESET`: `__module` ; `REVRANK`: `__module` ; `TRIMMED_MEAN`: `__module` ; `add`: `__module` ; `byRank`: `__module` ; `byRevRank`: `__module` ; `cdf`: `__module` ; `create`: `__module` ; `info`: `__module` ; `max`: `__module` ; `merge`: `__module` ; `min`: `__module` ; `quantile`: `__module` ; `rank`: `__module` ; `reset`: `__module` ; `revRank`: `__module` ; `trimmedMean`: `__module`  } ; `topK`: { `ADD`: `__module` ; `COUNT`: `__module` ; `INCRBY`: `__module` ; `INFO`: `__module` ; `LIST`: `__module` ; `LIST_WITHCOUNT`: `__module` ; `QUERY`: `__module` ; `RESERVE`: `__module` ; `add`: `__module` ; `count`: `__module` ; `incrBy`: `__module` ; `info`: `__module` ; `list`: `__module` ; `listWithCount`: `__module` ; `query`: `__module` ; `reserve`: `__module`  } ; `ts`: { `ADD`: `__module` ; `ALTER`: `__module` ; `CREATE`: `__module` ; `CREATERULE`: `__module` ; `DECRBY`: `__module` ; `DEL`: `__module` ; `DELETERULE`: `__module` ; `GET`: `__module` ; `INCRBY`: `__module` ; `INFO`: `__module` ; `INFO_DEBUG`: `__module` ; `MADD`: `__module` ; `MGET`: `__module` ; `MGET_WITHLABELS`: `__module` ; `MRANGE`: `__module` ; `MRANGE_WITHLABELS`: `__module` ; `MREVRANGE`: `__module` ; `MREVRANGE_WITHLABELS`: `__module` ; `QUERYINDEX`: `__module` ; `RANGE`: `__module` ; `REVRANGE`: `__module` ; `add`: `__module` ; `alter`: `__module` ; `create`: `__module` ; `createRule`: `__module` ; `decrBy`: `__module` ; `del`: `__module` ; `deleteRule`: `__module` ; `get`: `__module` ; `incrBy`: `__module` ; `info`: `__module` ; `infoDebug`: `__module` ; `mAdd`: `__module` ; `mGet`: `__module` ; `mGetWithLabels`: `__module` ; `mRange`: `__module` ; `mRangeWithLabels`: `__module` ; `mRevRange`: `__module` ; `mRevRangeWithLabels`: `__module` ; `queryIndex`: `__module` ; `range`: `__module` ; `revRange`: `__module`  }  }, `Record`<`string`, `never`\>, `Record`<`string`, `never`\>\>\>

#### Defined in

[src/redis/RedisPool.ts:60](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/RedisPool.ts#L60)

___

### config

• `Static` `get` **config**(): `RedisClientOptions`<`RedisModules`, `RedisFunctions`, `RedisScripts`\>

#### Returns

`RedisClientOptions`<`RedisModules`, `RedisFunctions`, `RedisScripts`\>

#### Defined in

[src/redis/RedisPool.ts:68](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/RedisPool.ts#L68)

## Methods

### acquire

▸ **acquire**(): `Promise`<[`RedisPoolClient`](../modules.md#redispoolclient)\>

#### Returns

`Promise`<[`RedisPoolClient`](../modules.md#redispoolclient)\>

#### Defined in

[src/redis/RedisPool.ts:28](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/RedisPool.ts#L28)

___

### release

▸ **release**(`poolClient`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolClient` | [`RedisPoolClient`](../modules.md#redispoolclient) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/redis/RedisPool.ts:41](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/RedisPool.ts#L41)

___

### shutdown

▸ **shutdown**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/redis/RedisPool.ts:91](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/RedisPool.ts#L91)

___

### withClient

▸ **withClient**(`callback`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`client`: `RedisClientType`<{ `bf`: { `ADD`: `__module` ; `CARD`: `__module` ; `EXISTS`: `__module` ; `INFO`: `__module` ; `INSERT`: `__module` ; `LOADCHUNK`: `__module` ; `MADD`: `__module` ; `MEXISTS`: `__module` ; `RESERVE`: `__module` ; `SCANDUMP`: `__module` ; `add`: `__module` ; `card`: `__module` ; `exists`: `__module` ; `info`: `__module` ; `insert`: `__module` ; `loadChunk`: `__module` ; `mAdd`: `__module` ; `mExists`: `__module` ; `reserve`: `__module` ; `scanDump`: `__module`  } ; `cf`: { `ADD`: `__module` ; `ADDNX`: `__module` ; `COUNT`: `__module` ; `DEL`: `__module` ; `EXISTS`: `__module` ; `INFO`: `__module` ; `INSERT`: `__module` ; `INSERTNX`: `__module` ; `LOADCHUNK`: `__module` ; `RESERVE`: `__module` ; `SCANDUMP`: `__module` ; `add`: `__module` ; `addNX`: `__module` ; `count`: `__module` ; `del`: `__module` ; `exists`: `__module` ; `info`: `__module` ; `insert`: `__module` ; `insertNX`: `__module` ; `loadChunk`: `__module` ; `reserve`: `__module` ; `scanDump`: `__module`  } ; `cms`: { `INCRBY`: `__module` ; `INFO`: `__module` ; `INITBYDIM`: `__module` ; `INITBYPROB`: `__module` ; `MERGE`: `__module` ; `QUERY`: `__module` ; `incrBy`: `__module` ; `info`: `__module` ; `initByDim`: `__module` ; `initByProb`: `__module` ; `merge`: `__module` ; `query`: `__module`  } ; `ft`: { `AGGREGATE`: `__module` ; `AGGREGATE_WITHCURSOR`: `__module` ; `ALIASADD`: `__module` ; `ALIASDEL`: `__module` ; `ALIASUPDATE`: `__module` ; `ALTER`: `__module` ; `CONFIG_GET`: `__module` ; `CONFIG_SET`: `__module` ; `CREATE`: `__module` ; `CURSOR_DEL`: `__module` ; `CURSOR_READ`: `__module` ; `DICTADD`: `__module` ; `DICTDEL`: `__module` ; `DICTDUMP`: `__module` ; `DROPINDEX`: `__module` ; `EXPLAIN`: `__module` ; `EXPLAINCLI`: `__module` ; `INFO`: `__module` ; `PROFILEAGGREGATE`: `__module` ; `PROFILESEARCH`: `__module` ; `SEARCH`: `__module` ; `SPELLCHECK`: `__module` ; `SUGADD`: `__module` ; `SUGDEL`: `__module` ; `SUGGET`: `__module` ; `SUGGET_WITHPAYLOADS`: `__module` ; `SUGGET_WITHSCORES`: `__module` ; `SUGGET_WITHSCORES_WITHPAYLOADS`: `__module` ; `SUGLEN`: `__module` ; `SYNDUMP`: `__module` ; `SYNUPDATE`: `__module` ; `TAGVALS`: `__module` ; `_LIST`: `__module` ; `_list`: `__module` ; `aggregate`: `__module` ; `aggregateWithCursor`: `__module` ; `aliasAdd`: `__module` ; `aliasDel`: `__module` ; `aliasUpdate`: `__module` ; `alter`: `__module` ; `configGet`: `__module` ; `configSet`: `__module` ; `create`: `__module` ; `cursorDel`: `__module` ; `cursorRead`: `__module` ; `dictAdd`: `__module` ; `dictDel`: `__module` ; `dictDump`: `__module` ; `dropIndex`: `__module` ; `explain`: `__module` ; `explainCli`: `__module` ; `info`: `__module` ; `profileAggregate`: `__module` ; `profileSearch`: `__module` ; `search`: `__module` ; `spellCheck`: `__module` ; `sugAdd`: `__module` ; `sugDel`: `__module` ; `sugGet`: `__module` ; `sugGetWithPayloads`: `__module` ; `sugGetWithScores`: `__module` ; `sugGetWithScoresWithPayloads`: `__module` ; `sugLen`: `__module` ; `synDump`: `__module` ; `synUpdate`: `__module` ; `tagVals`: `__module`  } ; `graph`: { `CONFIG_GET`: `__module` ; `CONFIG_SET`: `__module` ; `DELETE`: `__module` ; `EXPLAIN`: `__module` ; `LIST`: `__module` ; `PROFILE`: `__module` ; `QUERY`: `__module` ; `RO_QUERY`: `__module` ; `SLOWLOG`: `__module` ; `configGet`: `__module` ; `configSet`: `__module` ; `delete`: `__module` ; `explain`: `__module` ; `list`: `__module` ; `profile`: `__module` ; `query`: `__module` ; `roQuery`: `__module` ; `slowLog`: `__module`  } ; `json`: { `ARRAPPEND`: `__module` ; `ARRINDEX`: `__module` ; `ARRINSERT`: `__module` ; `ARRLEN`: `__module` ; `ARRPOP`: `__module` ; `ARRTRIM`: `__module` ; `DEBUG_MEMORY`: `__module` ; `DEL`: `__module` ; `FORGET`: `__module` ; `GET`: `__module` ; `MGET`: `__module` ; `NUMINCRBY`: `__module` ; `NUMMULTBY`: `__module` ; `OBJKEYS`: `__module` ; `OBJLEN`: `__module` ; `RESP`: `__module` ; `SET`: `__module` ; `STRAPPEND`: `__module` ; `STRLEN`: `__module` ; `TYPE`: `__module` ; `arrAppend`: `__module` ; `arrIndex`: `__module` ; `arrInsert`: `__module` ; `arrLen`: `__module` ; `arrPop`: `__module` ; `arrTrim`: `__module` ; `debugMemory`: `__module` ; `del`: `__module` ; `forget`: `__module` ; `get`: `__module` ; `mGet`: `__module` ; `numIncrBy`: `__module` ; `numMultBy`: `__module` ; `objKeys`: `__module` ; `objLen`: `__module` ; `resp`: `__module` ; `set`: `__module` ; `strAppend`: `__module` ; `strLen`: `__module` ; `type`: `__module`  } ; `tDigest`: { `ADD`: `__module` ; `BYRANK`: `__module` ; `BYREVRANK`: `__module` ; `CDF`: `__module` ; `CREATE`: `__module` ; `INFO`: `__module` ; `MAX`: `__module` ; `MERGE`: `__module` ; `MIN`: `__module` ; `QUANTILE`: `__module` ; `RANK`: `__module` ; `RESET`: `__module` ; `REVRANK`: `__module` ; `TRIMMED_MEAN`: `__module` ; `add`: `__module` ; `byRank`: `__module` ; `byRevRank`: `__module` ; `cdf`: `__module` ; `create`: `__module` ; `info`: `__module` ; `max`: `__module` ; `merge`: `__module` ; `min`: `__module` ; `quantile`: `__module` ; `rank`: `__module` ; `reset`: `__module` ; `revRank`: `__module` ; `trimmedMean`: `__module`  } ; `topK`: { `ADD`: `__module` ; `COUNT`: `__module` ; `INCRBY`: `__module` ; `INFO`: `__module` ; `LIST`: `__module` ; `LIST_WITHCOUNT`: `__module` ; `QUERY`: `__module` ; `RESERVE`: `__module` ; `add`: `__module` ; `count`: `__module` ; `incrBy`: `__module` ; `info`: `__module` ; `list`: `__module` ; `listWithCount`: `__module` ; `query`: `__module` ; `reserve`: `__module`  } ; `ts`: { `ADD`: `__module` ; `ALTER`: `__module` ; `CREATE`: `__module` ; `CREATERULE`: `__module` ; `DECRBY`: `__module` ; `DEL`: `__module` ; `DELETERULE`: `__module` ; `GET`: `__module` ; `INCRBY`: `__module` ; `INFO`: `__module` ; `INFO_DEBUG`: `__module` ; `MADD`: `__module` ; `MGET`: `__module` ; `MGET_WITHLABELS`: `__module` ; `MRANGE`: `__module` ; `MRANGE_WITHLABELS`: `__module` ; `MREVRANGE`: `__module` ; `MREVRANGE_WITHLABELS`: `__module` ; `QUERYINDEX`: `__module` ; `RANGE`: `__module` ; `REVRANGE`: `__module` ; `add`: `__module` ; `alter`: `__module` ; `create`: `__module` ; `createRule`: `__module` ; `decrBy`: `__module` ; `del`: `__module` ; `deleteRule`: `__module` ; `get`: `__module` ; `incrBy`: `__module` ; `info`: `__module` ; `infoDebug`: `__module` ; `mAdd`: `__module` ; `mGet`: `__module` ; `mGetWithLabels`: `__module` ; `mRange`: `__module` ; `mRangeWithLabels`: `__module` ; `mRevRange`: `__module` ; `mRevRangeWithLabels`: `__module` ; `queryIndex`: `__module` ; `range`: `__module` ; `revRange`: `__module`  }  }, `Record`<`string`, `never`\>, `Record`<`string`, `never`\>\>) => `Promise`<`any`\> |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/redis/RedisPool.ts:46](https://github.com/d4lton/node-backend/blob/21f6bb2/src/redis/RedisPool.ts#L46)
