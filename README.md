# web3-week1-credit-ledger

A Week 1 Web3 credit ledger project built with Node.js, Hardhat, and Solidity.

## What It Does

`CreditLedger` records signed credit changes for named accounts. Each ledger entry stores:

- account name
- credit delta
- memo
- actor address
- block timestamp

Only the deployer can write new ledger entries.

## Setup

```bash
npm install
```

## Commands

```bash
npm run compile
npm test
npm run deploy
```

`npm run deploy` uses Hardhat's local simulated network by default.

