const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    //기존에 develop이었는데 안됐음 development로 변경하니까 됨
    develop: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  //추가함
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};
