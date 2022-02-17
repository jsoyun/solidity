const Web3 = require("web3");
const fs = require("fs");

const ABI = JSON.parse(
  fs.readFileSync("./contracts_Votiing_test_sol_VotingTest.abi").toString()
);
const BYTECODE = fs
  .readFileSync("./contracts_Votiing_test_sol_VotingTest.bin")
  .toString();

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
let accounts = web3.eth.getAccounts().then((data) => {
  console.log(data);
});
//스마트 콘트랙트 전달
const votingContract = new web3.eth.Contract(ABI, accounts[0]); //스마트콘트렉트
//배포
votingContract
  .deploy({
    data: BYTECODE,
  })
  .send({
    from: accounts[0],
    gas: 470000,
    gasPrice: "80000000",
  })
  .then(function (newContractsInstance) {
    console.log(newContractsInstance);
  });

votingContract.methods
  .getVotedCount("yun")
  .call()
  .then((data) => {
    console.log("Voted Count : ", data);
  });
