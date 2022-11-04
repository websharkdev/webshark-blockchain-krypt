import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-waffle";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    repsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv",
      accounts: [
        "428522c3c39a5054c2b7f44c8a6de9367faee9453b5e33e86d82a8345a8efb49",
      ],
    },
  },
};

export default config;
