// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 < 0.9.0;

/*
interface : 스마트컨트랙 내에서 정의되어야할 필요한 것 
1, 함수는 external로 표시
2, enum, structs 가능 
3, 변수, 생성자 불가(constructor X)
*/

interface ItemInfo {
    struct item{
        string name;
        uint256 price;
    }
    //무조건 external써줘야함
    function addItemInfo(string memory _name,uint256 _price) external;
    function getItemInfo(uint256 _index) external view returns(item memory);
}


//lec39는 is를 통해 적용받은 걸 알 수 있음
contract lec39 is ItemInfo{
    //ItemInfo에 struct구조로 이렇게 쓸 수 있음
    item[] public itemList;
    //인터페이스 ItemInfo가 각 스마트컨트랙에 적용이 된다면
    //함수들 꼭 써줘야함, 함수 정의할때 override꼭써줘야함
    function addItemInfo(string memory _name,uint256 _price) override public {
        itemList.push(item(_name,_price));
    }
    //함수들 꼭 써줘야함, 함수 정의할때 override꼭써줘야함
    function getItemInfo(uint256 _index) override public view returns(item memory) {
        //item 타입의 리스트 값을 반환.
        return itemList[_index];
    }
} 