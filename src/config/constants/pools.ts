import tokens, { ChainId } from './tokens';
import { PoolConfig, PoolCategory } from './types';

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.kaco,
    earningToken: tokens.kaco,
    contractAddress: {
      [ChainId.TESTNET]: '0x7DE7fF5D0290695c7f8a4531ff77FFCC8461C29e',
      [ChainId.MAINNET]: '0x81b71D0bC2De38e37978E6701C342d0b7AA67D59',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.02',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.kaco,
    earningToken: tokens.usdt,
    contractAddress: {
      [ChainId.TESTNET]: '',
      [ChainId.MAINNET]: '0x2c57d7A3352506367be29691eDC0ae77FdD636A8',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.023148148148148',
    sortOrder: 999,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.kaco,
    earningToken: tokens.dot,
    contractAddress: {
      [ChainId.TESTNET]: '',
      [ChainId.MAINNET]: '0xb676E8fa2a1B38C2Cb22ab14b53743efb2cA93c9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0004930555550',
    sortOrder: 999,
    isFinished: false,
  },
];

export default pools;
