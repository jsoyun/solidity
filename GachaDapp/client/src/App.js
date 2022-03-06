import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RabdomPick from "./contracts/RabdomPick.json";
// import VoteContract from "./contracts/Vote.json";
import getWeb3 from "./getWeb3";

import "./App.css";

const App = () => {
  const [web3, setWeb3] = useState();
  const [accounts, setAccounts] = useState();
  const [rabdomPickContract, setRandomPickContract] = useState();
  const [address, setAddress] = useState(""); // 주소
  const [itemList, setItemList] = useState();

  const itemListArr = [];

  const init = async () => {
    try {
      console.log("유즈이펙트1");

      const web3 = await getWeb3();
      console.log("유즈이펙트");
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = await RabdomPick.networks[networkId];

      const rabdomPick = await new web3.eth.Contract(
        RabdomPick.abi,
        deployedNetwork && deployedNetwork.address
      );

      setWeb3(web3);
      setAccounts(accounts);
      setRandomPickContract(rabdomPick);

      //랜덤 뽑기 이벤트
      await rabdomPick.events
        .pickResult({ filter: { _pickAddr: accounts[0] } })
        .on("data", async (e) => {
          itemListArr.push(e.returnValues._pickAddr);
          setAddress(itemListArr);

          alert(
            e.returnValues._pickAddr +
              " 님\n" +
              "아이템 " +
              e.returnValues._pickItem +
              " 을 획득하셨습니다!!"
          );
          if (e.returnValues._pickCount % 5 == 0) {
            alert("**** 보너스 뽑기 가능 ****");
          }
        });

      //보너스 뽑기 이벤트
      await rabdomPick.events
        .bonusPickResult({ filter: { _pickAddr: accounts[0] } })
        .on("data", async (e) => {
          alert(
            "== 보너스 뽑기 ==\n" +
              e.returnValues._pickAddr +
              " 님\n" +
              "아이템 " +
              e.returnValues._pickItem +
              " 을 획득하셨습니다!!"
          );
        });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  useEffect(async () => {
    init();
  }, []);

  //--------------------------------------------

  //랜덤 뽑기 함수
  const pickItem = async () => {
    await rabdomPickContract.methods
      .randomPick()
      .send({
        from: accounts[0],
        gas: 200000,
        gasPrice: "50000000000",
        value: web3.utils.toWei("0.02", "ether"),
      })
      .then((result) => {
        console.log(result);
      });

    await rabdomPickContract.methods
      .getItemsPerAddress()
      .call({ from: accounts[0] })
      .then((result) => {
        setItemList(result);
        console.log(result);
      });
  };

  //보너스 뽑기 함수
  const pickItem_bonus = async () => {
    await rabdomPickContract.methods
      .bonusPick()
      .send({ from: accounts[0] })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        alert(
          "보너스 기회가 없습니다. 아이템을 5회 뽑을때마다 보너스 기회가 1번 주어집니다."
        );
        console.log(err);
      });

    await rabdomPickContract.methods
      .getItemsPerAddress()
      .call({ from: accounts[0] })
      .then((result) => {
        setItemList(result);
        console.log(result);
      });
  };

  //----------------------------------------------------

  return (
    <BrowserRouter>
      <h1>Random 아이템 뽑기</h1>
      <h5>아래 버튼을 클릭해 아이템을 뽑아 주세요</h5>
      <button onClick={pickItem}>아이템 뽑기</button>
      <button onClick={pickItem_bonus}>보너스 뽑기</button>
      <br />
      <h2>아이템 리스트</h2>
      계정 주소 : {address}
      {itemList &&
        itemList.map((item, i) => {
          return (
            <div key={i}>
              <div>아이템 넘버 : {item}</div>
            </div>
          );
        })}
    </BrowserRouter>
  );
};

export default App;
