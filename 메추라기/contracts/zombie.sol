//간단한 암호화폐 simplecoin의 첫번째 구현
pragma solidity ^0.4.0;  //pragma는 솔리디티 컴파일러의 지원버전을 나타낸다.
contract SimpleCoin {  //컨트랙트를 정의하는 코드. 컨트랙트는 다른 언어의 클래스와 비슷
  //상태변수를 주소와 정수 사이의 '매핑'으로 정의한다. 
  //상태변수는 클래스의 멤버 변수와 같음. 매핑은 해시 테이블 또는 해시맵과 동일함.
    mapping (address => uint256) public coinBalance ;
    //mapping(string => addresss) public tenDatabase;
  
   //
   event Transfer(address indexed from, address indexed to, uint256 value);
   // 생성자, 컨트랙트 생성자를 정의
    constructor(uint256 _initalSupply) public {
        coinBalance[msg.sender] = _initalSupply;
        //  [msg.sender] = 10000; //멤버필드 초기화
    }

    //메서드
    //해당주소에 얼마만큼 보내겟다
    //함수 호출자의 계정에서 지정된 계정으로 일정수의 simplecoin토큰을 전송하는 함수를 정의한다.
    function transfer(address _to, uint256 _amount) public {
        require(coinBalance[msg.sender] > _amount);
        require(coinBalance[_to] + _amount >= coinBalance[_to]);
        //메시지 발신자의 잔액을 지정된 토큰 수만큼 줄인다. msg.sender는 보낸사람의 주소를 나타냄.
        coinBalance[msg.sender] -= _amount;
        //지정된 코튼수만큼 동전잔고를 증가시킴
        coinBalance[_to] += _amount;
        emit Transfer(msg.sender, _to, _amount);
    }
}