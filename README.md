# Stellar Explorer

[![Build Status](https://travis-ci.org/chatch/stellarexplorer.svg?branch=master)](https://travis-ci.org/chatch/stellarexplorer)

A ledger explorer for [Stellar](https://stellar.org).

Public: https://steexp.com
Test: https://testnet.steexp.com
Local: http://localhost:3000

## Resources

### Lists

| Resource       | URI                                          |
| -------------- | -------------------------------------------- |
| Operations     | [/operations](https://steexp.com/operations) |
| Transactions   | [/txs](https://steexp.com/txs)               |
| Ledgers        | [/ledgers](https://steexp.com/ledgers)       |
| Payments       | [/payments](https://steexp.com/payments)     |
| Trades         | [/trades](https://steexp.com/trades)         |
| Effects [SOON] | [/effects](https://steexp.com/effects)       |

### Directory

| Resource  | URI                                        |
| --------- | ------------------------------------------ |
| Assets    | [/assets](https://steexp.com/assets)       |
| Anchors   | [/anchors](https://steexp.com/anchors)     |
| Exchanges | [/exchanges](https://steexp.com/exchanges) |

### Accounts

| Resource             | URI                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| by Federated address | [/account/stellar\*fed.network](https://steexp.com/account/stellar*fed.network)                                                                          |
| by Public address    | [/account/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX](https://steexp.com/account/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX) |

#### Tabs

| Resource         | URI                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| Operations Tab   | [/account/stellar\*fed.network#operations](https://steexp.com/account/stellar*fed.network#operations)     |
| Transactions Tab | [/account/stellar\*fed.network#transactions](https://steexp.com/account/stellar*fed.network#transactions) |
| Effects Tab      | [/account/stellar\*fed.network#effects](https://steexp.com/account/stellar*fed.network#effects)           |
| Signing Tab      | [/account/stellar\*fed.network#signing](https://steexp.com/account/stellar*fed.network#signing)           |
| Flags Tab        | [/account/stellar\*fed.network#flags](https://steexp.com/account/stellar*fed.network#flags)               |
| Thresholds Tab   | [/account/stellar\*fed.network#thresholds](https://steexp.com/account/stellar*fed.network#thresholds)     |
| Data Tab         | [/account/stellar\*fed.network#data](https://steexpcom/account/stellar*fed.network#data)                  |

### Search

| Resource           | URI                                                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Federated address  | [/search/steexp\*fed.network](https://steexp.com/search/steexp*fed.network)                                                                                            |
| Public address     | [/search/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX](https://steexp.com/search/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX)                 |
| Ledger             | [/search/10000000](https://steexp.com/search/10000000)                                                                                                                 |
| Transaction        | [/search/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071](https://steexp.com/search/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071) |
| Asset Code [SOON]  | [/search/MOBI](https://steexp.com/search/MOBI)                                                                                                                         |
| Anchor Name [SOON] | [/search/ripplefox](https://steexp.com/search/ripplefox)                                                                                                               |

### Misc

| Resource    | URI                                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Transaction | [/tx/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071](https://steexp.com/tx/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071) |
| Ledger      | [/ledger/10000000](https://steexp.com/ledger/10000000)                                                                                                         |

## Exploring Private / Local Development Networks<a name="private-networks"></a>

steexp will connect to a local horizon instance at http://localhost:8000 by default. If your running a local private network for development this is quite handy for browsing your changes to the ledger.

Alternatively you can run locally connecting to the testnet or public network horizon instances. To do this define these aliases to localhost:

```
127.0.1.1  testnet.local     # for steexp use testnet horizon
127.0.1.1  publicnet.local   # for steexp use mainnet horizon
```

Navigate to http://testnet.local:3000 or http://publicnet.local:3000 to select the network your interesting in exploring.

## Development

NOTE: use npm instead of yarn to install the dependencies - see [#15](https://github.com/chatch/stellarexplorer/issues/15) for details

See the section [Exploring Private / Local Development Networks](#private-networks) for connecting to different backend networks. By default steexp will look for a local instance of horizon.

Start:

```
npm i && npm start
```

Test:

```
npm i && npm test
```

Build:

```
npm i && npm run build
```

## Languages

Use the language selector in the top right corner to change the language.

Translation files are here:
https://github.com/chatch/stellarexplorer/tree/master/src/languages

Submit pull requests with new languages or languages fixes there.
