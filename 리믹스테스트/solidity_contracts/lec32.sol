// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0<0.9.0;

//payable
//payble은 이더/토큰과 상호작용시 필요한 키워드. 
//즉 send, transfer, call을 이용해 이더를 보낼때 payable이라는 키워드가 필요하다
//이 payable은 주로 함수, 주소, 생성자에 붙여서 사용된다.

//msg.value
//msg.value는 송금보낸 코인의 값이다.

//이더를 보내는 3가지 함수
 //1.send : 2300 gas를 소비, 성공여부를 에러대신에 true 또는 false로 리턴한다.. send 단점 에러를 보내지 못함
 //2. transfer : 2300 gas를 소비, 실패시 에러를 발생
 //3. call: 가변적인 gas소비 (gas값 지정 가능), 성공여부를 true 또는 false로 리턴
    //      재진입 공격(reentrancy, 한개의 스마트 컨트랙이 다른 컨트랙트에 이더를 보낼때 이더를 다 보낼때까지 가스를 소비하는 것을 말함)
    //  위험성 있음, 2019년 12월 이후 call사용을 추천.


contract lec32{
    event howMuch(uint256 _value);
    //_to 스마트컨트랙트 주소, 이더를 받을 사람 즉 송금받을 사람의 주소..니까 payble써주고 함수 자체도 보내줘야하는거래 payable씀
    function sendNow(address payable _to) public payable{
        //msg.value는 내가 송금보낼 코인의 값
        bool sent = _to.send(msg.value); //return true of false
        require(sent, "Failed to send either");
        emit howMuch(msg.value);
    }
     //
    function transferNow(address payable _to) public payable{
        _to.transfer(msg.value);
        emit howMuch(msg.value);
    }
                                   //파라미터 _to는 이더 받을 사람
    function callNow (address payable _to) public payable {
        (bool sent, ) = _to.call{value: msg.value, gas:1000}("");
        require(sent, "Failed to send Either");
        emit howMuch(msg.value);
        
    }
}