# arc-stablecoin-settlement-layer

Reference implementation of high-throughput settlement and payment rails on Arc (Circle's stablecoin-native L1).

## Overview
This starter shows how to build efficient on-chain settlement layers optimized for stablecoins and tokenized assets on Arc. Features sub-second finality and simple payment/settlement logic.

## Tech Stack
- Solidity (EVM compatible on Arc)
- Hardhat / Foundry
- viem or ethers.js

## Getting Started
```bash
git clone https://github.com/Proxtox/arc-stablecoin-settlement-layer.git
cd arc-stablecoin-settlement-layer
npm install
```

## Deploy on Arc Testnet
Update hardhat.config.js with Arc RPC and deploy.

## Key Files
- `contracts/SettlementLayer.sol` - Core settlement and payment contract

## Next Steps
- Add USDC support via CCTP
- Implement batch settlements
- Add off-chain indexing for payments
- Build a simple dashboard

## License
MIT