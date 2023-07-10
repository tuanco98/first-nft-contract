import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';
import { HardhatUserConfig } from "hardhat/config";

const private_keys = [process.env["PRIVATE_KEY"] || 'a3c21b459a169e9e2049a8542f9cd9f0326cb72094a6d0a728f95fe3769b0f4d' as string]
const config: HardhatUserConfig = {
  defaultNetwork: 'goerliEth',
  networks: {
    // goerli: {
    //   url: "https://goerli-rollup.arbitrum.io/rpc",
    //   accounts: private_keys,
    // },
    // opBNB: {
    //   url: "https://opbnb-testnet-rpc.bnbchain.org/",
    //   accounts: private_keys,
    //   chainId: 5611,
    //   gasPrice: 2000000000
    // },
    // bsc: {
    //   url: 'https://data-seed-prebsc-1-s3.binance.org:8545/',
    //   accounts: private_keys
    // },
    goerliEth: {
      url: "https://eth-goerli.g.alchemy.com/v2/1bUUfov-DNCIG6bD-9yN8j4qv9HVeF1e",
      accounts: private_keys,
    },
  },
  etherscan: {
    apiKey: {
      // arbitrumGoerli: "7RXDHXSQU6C81Q6SYHEPTXWVRHRUS4MUTJ",
      goerli: "B837A7Y4V6AE6RJTDI1U7EY3S7H9ASPYEQ",
      // bscTestnet: "HARZXWHH7ZRYIAM7ZDYU4MFTTD3XQW19XZ",
    }
  },
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 99999
      }
    }
  },
};

export default config;
