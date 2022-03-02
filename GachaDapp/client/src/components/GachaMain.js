import React from "react";
// import Web3 from "web3";
// import { useState, useEffect } from "react";
// import getWeb3 from "../getWeb3";
// import Gacha from "../contracts/Gacha.json";

//테스트다

// console.log("뭐니너", [test]);

function GachaMain() {
  //   const [show, setShow] = useState[""];
  //테스트겸
  //   const [count, setCount] = useState(["초기"]);
  //   useEffect(() => {

  //   },[]);
  //   const web3 = getWeb3();
  //   const test = new web3.eth.Contract(Gacha.abi);
  //   this.setState({ contract: test });
  //   const abi = Gacha.abi;
  //   console.log([abi]);

  const getContract = async (web3) => {
    const data = await getJSON("../contracts/Greeting.json");

    const netId = await web3.eth.net.getId();
    const deployedNetwork = data.networks[netId];
    const greeting = new web3.eth.Contract(
      data.abi,
      deployedNetwork && deployedNetwork.address
    );
    return greeting;
  };

  getContract();

  return (
    <div>
      dfffffffffff
      {/* Show:{show} */}
      {/* <div>test:{this.state.contract}</div> */}
      {/* Count: {count} */}
      {/* <button onClick={setShow}>눌렀을때아이템가져오게</button> */}
      {/* <button onClick={() => setCount(["초기"])}>초기로 돌리기</button> */}
      {/* <button onClick={() => setCount((e) => e + 1)}>+</button> */}
    </div>
  );
}

export default GachaMain;
