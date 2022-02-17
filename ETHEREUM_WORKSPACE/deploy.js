const Web3 = require("web3");

const fs = require("fs");

const ABI = JSON.parse(
  fs.readFileSync("./contracts_Votiing_test_sol_VotingTest.abi").toString()
);
const BYTECODE = fs
  .readFileSync("./contracts_Votiing_test_sol_VotingTest.bin")
  .toString();

const accounts = [];
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

async function init() {
  await web3.eth.getAccounts().then((data) => {
    data.forEach((x) => {
      accounts.push(x);
    });
  });
}

init().then(() => {
  console.log(accounts);

  //스마트 콘트랙트 전달
  const votingContract = new web3.eth.Contract(ABI); //스마트콘트렉트
  //배포
  votingContract
    .deploy({
      data: BYTECODE,
    })
    .send({
      from: accounts[1],
      gas: 1562000,
      gasPrice: "54300000000",
    })
    .then((newContractsInstance) => {
      console.log(newContractsInstance.options.address);
      newContractsInstance.methods
        .getVotedCount("soyun")
        .call()
        .then((data) => {
          console.log("Voted Count :" + data);
        });
    });
});
