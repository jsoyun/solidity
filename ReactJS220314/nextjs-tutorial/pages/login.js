import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";

export default function login() {
  const [userReg, setUserReg] = useState("");
  const [passwReg, setPasswReg] = useState("");

  const register = () => {
    axios
      .post("https://localhost3001/register", {
        username: userReg,
        password: passwReg,
      })
      .then((res) => {
        console.log(res, "찍힐까...?");
      });
  };

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");
  };
  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      axios
        .get("/user_inform/login")
        .then((res) => console.log(res))
        .catch();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );

  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input
            placeholder="text"
            onChange={(e) => setUserReg(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="password"></input>
        </Form.Field>

        <Form.Field inline>
          <input type="text" placeholder="nation"></input>
        </Form.Field>
        <Button color="blue" onClick={onClickLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
}
