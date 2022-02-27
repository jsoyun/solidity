// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 < 0.9.0;


contract add{
    event JustFallback(string _str);
     event JustReceive(string _str);
     function addNumber(uint256 _num1, uint256 _num2) public pure returns(uint256){
         return _num1 + _num2;
     }
     //원하는 함수 없을때
     fallback() external payable{
         emit JustFallback("JustFallback is called");
     }
     //이더받을때
     receive() external payable{
         emit JustReceive("JustReceive is called");
     }


}

contract caller{
    event calledFunction(bool _success, bytes _output);

    //1.송금하기
    function transferEther(address payable _to) public payable{
        (bool success,) = _to.call{value:msg.value}("");
        require(success, "failed to transfer ether");
    }
    //2. 외부 스마트 컨트랙 함수 부르기
                     //address _contractAddr는 add스마트컨트랙트의 주소
    function callMethod(address _contractAddr, uint256 _num1, uint256 _num2) public {
        // add컨트랙트안에 있는 return 된 _num1 +_num2 얘가 bytes화돼서 return값가져옴
        (bool success, bytes memory outputFromCalledFunction) = _contractAddr.call(
            //외부스마트컨트랙함수 부르는 방법임 "함수(타입),파라미터 또는 값써줘도됨"
             abi.encodeWithSignature("addNumber(uint256,uint256)",_num1,_num2)
        );
        require(success,"failed to transfer ether");
        emit calledFunction(success,outputFromCalledFunction);
    }

    function callMethod3(address _contractAddr) public payable{
        (bool success, bytes memory outputFromCalledFunction) = _contractAddr.call{value:msg.value}(
              abi.encodeWithSignature("Nothing()")
        );
        require(success, "failed to transfer ether");
        emit calledFunction(success,outputFromCalledFunction);
    }

}