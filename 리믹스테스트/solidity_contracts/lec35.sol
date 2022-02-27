// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 < 0.9.0;


contract Bank{

    event JustFallbackWIthFunds (address _from, uint256 _value, string message);
    function () external payable {
        emit JustFallbackWIthFunds(msg.sender, msg.value, "JustFallbackWIthFunds is called");

    }
}

contract You {
    //receive
    //Bank에게 이더를 보내려고 하니까 payable을 씀
    function DepositWithSend(address payable _to) public payable{
                          //send이용해서 보내겟지
        bool success = _to.send(msg.value);
        require(success, "failed");

    }

    function DepositWithTransfer(address payable _to) public payable{
        //transfer사용해서 이더보내려고 함
        _to.transfer(msg.value);
    }

    function DepositWithCall(address payable _to) public payable{
        // 0.7이전모습!!   call사용해서 이더보내려고함. 
        (bool sent,) = _to.call.value(msg.value)("");
        require(sent,"Failed to send either");

            }


    //fallback()
    function JustGiveMessage(address _to) public {
        //~0.7  이더를 보내지 않고 함수 실행  Bank스마트컨트랙트에 HI라는 함수를 부르는 가정, 그 함수가 없으면
        //fallback에 걸림
        (bool sent, ) = _to.call("hi");
        require(sent, "Failed to send either");

    }

    //to the fallback() with funds
    
    function JustGiveMessageWithFunds(address payable _to) public payable{
        //0.7이전 //이더도 보내고 fallback도 보냄
        (bool sent,) = _to.call.value(msg.value)("hi");
        require(sent,"failed to send either");
        
    }

}