pragma solidity ^0.4.0;
contract SimpleCoin {
    //멤버 필드
    //public int num
    //map 변수 타입
    mapping (address => uint256) public coinBalance ;
    //mapping(string => addresss) public tenDatabase;
   // 생성자

   event Transfer(address indexed from, address indexed to, uint256 value);

    constructor(uint256 _initalSupply) public {
        coinBalance[msg.sender] = _initalSupply;
        //  [msg.sender] = 10000; //멤버필드 초기화
    }

    //메서드
    //해당주소에 얼마만큼 보내겟다
    function transfer(address _to, uint256 _amount) public {
        require(coinBalance[msg.sender] > _amount);
        require(coinBalance[_to] + _amount >= coinBalance[_to]);
        coinBalance[msg.sender] -= _amount;
        coinBalance[_to] += _amount;
        emit Transfer(msg.sender, _to, _amount);
    }
}