import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-waffle";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    repsten: {
      url: "https://eth-goerli.g.alchemy.com/v2/nt5a1Vt3Y5x960mjfFqIXCe-TmxRQBLF",
      accounts: [
        "428522c3c39a5054c2b7f44c8a6de9367faee9453b5e33e86d82a8345a8efb49",
      ],
    },
  },
};

export default config;
