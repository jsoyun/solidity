// web3 = new web3(new web3.providers.HttpProvider("http://localhost:8548"));
// abi = JSON.parse(
//   '[{"inputs":[{"internalType":"bytes32[]","name":"candidateNames","type":"bytes32[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidateList","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]'
// );
// VotingContract = web3.eth.contract(abi);
// contractInstance = VotingContract.at(
//   "0x1b98efd29743f589646dbd0b064a9e4cfc4005f8"
// );
// candidates = { Rama: "candidate-1", Nick: "candidate-2", Jose: "candidate-3" };

// function voteForCandidate(candidate) {
//   candidateName = $("#candidate").val();
//   contractInstance.voteForCandidate(
//     candidateName,
//     {
//       from: web3.eth.accounts[0],
//       gas: 4700000,
//     },
//     function () {
//       //투표받아서 업데이트 되는거 확인
//       let div_id = candidates[candidateName];
//       $("#" + div_id).html(
//         contractInstance.totalVotesFor.call(candidateName).toString()
//       );
//     }
//   );
// }

// $(document).ready(function () {
//   candidateNames = Object.keys(candidates);

//   for (var i = 0; i < candidateNames.length; i++) {
//     let name = candidateNames[i];
//     let val = contractInstance.totalVotesFor.call(name).toNumber();
//     $("#" + candidates[name]).html(val);
//   }
// });

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var account;

abi = JSON.parse(
  '[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'
);
VotingContract = web3.eth.contract(abi);

contractInstance = VotingContract.at(
  "0x1b98efd29743f589646dbd0b064a9e4cfc4005f8"
);

candidates = { Rama: "candidate-1", Nick: "candidate-2", Jose: "candidate-3" };

function voteForCandidate(candidate) {
  candidateName = $("#candidate").val();

  contractInstance.voteForCandidate(
    candidateName,
    { from: account, gas: 4700000 },
    function () {
      let div_id = candidates[candidateName];
      $("#" + div_id).html(
        contractInstance.totalVotesFor.call(candidateName).toString()
      );
    }
  );
}

$(document).ready(function () {
  web3.eth.getAccounts(function (err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length === 0) {
      alert(
        "Couldn't get any accounts! Make sure your Ethereum client is configured correctly."
      );
      return;
    }

    account = accs[0];
  });

  candidateNames = Object.keys(candidates);

  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    let val = contractInstance.totalVotesFor.call(name).toNumber();
    $("#" + candidates[name]).html(val);
  }
});
