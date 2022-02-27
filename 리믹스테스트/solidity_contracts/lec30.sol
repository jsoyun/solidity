// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0<0.9.0;

//modifier

//revert나 require를 주로 넣어서 사용하는데 modifier는 모듈이나 미들웨어처럼 여러 함수에 한번에 사용할 수 있음

contract lec30 {
    //modifier에 파라미터값을 받지는 않고 revert바로 에러내보냄
    modifier onlyAdults {
        revert("you are not allowed to pay for the cigarette");
        _; //얘는 함수가 들어간다고 생각하면됨. 지금 revert바로 에러나오는구조라서 함수의 return은 나오지 않겠지.

    }

    function BuyCigarette() public onlyAdults returns(string memory){
        return "your payment is succeeded";
    }
    //파라미터 값 받는 modifier
     modifier onlyAdults2 (uint256 _age) {
      
        require(_age>18, "You are not allowed to pay for the cigarette");
        _; //얘는 함수가 들어간다고 생각하면됨. 
        
    }

    function BuyCigarette2(uint256 _age) public onlyAdults2(_age) returns(string memory){
        return "your payment is succeeded";
    }

    uint256 public num = 5;
    modifier numChange {
        _;
        num = 10;

    }

    function numChangeFunction() public numChange{
        num = 15;
         
    }

}
