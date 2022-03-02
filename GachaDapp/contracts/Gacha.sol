// 오늘 할 일 
//  - 가쟈 디앱 만들기 
//  - 기능 1 : 10개의 아이템이 존재하고 뽑기 1회 당 정해진 가스를 소모하면서 
//랜덤 확률로 아이템을 획득한다.

//  - 기능 2 : 뽑기 5회마다 1회의 보너스 기회를 준다..
// (지금까지 뽑기 내역은 이벤트를 통해 처리한다.)


//투표랑 마켓거래랑 구조는 비슷하다고 생각해도 될듯
//기존에 10개의 아이템이 등록되어 있음
//누르면 뽑을 수 있음 (1회당 가스소비)
//아이템은 렌덤하게 선택됨
//뽑기를 5번하면 1번도 기회받을 수 있음 (저번에 투표를 1번만하게 막는거 다 리액트에서 막았는데
//뽑기 내역을 이벤트통해 처리하면 솔리디티에서 다뤄야하는건가...)

// // SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;
//
pragma experimental ABIEncoderV2; //이거 안쓰고 싶으면 그냥 이걸로(pragma solidity ^0.8.0;) 쓰면 되긴 함

contract Gacha{
    //기존에 10개 아이템, 뽑는가스쓰는사람주소, 뽑기내역 저장?
    

    //기존 아이템배열
    // string GachaItem;
    string[10] GachaItemList;
    // mapping(string => bool) GachaItemExists;

    // constructor() {
    //     GachaItemlist = GachaItem.push();        
    // }

    //아이템 보여주는 애
    function ShowItem() public returns(string[10] memory){
      GachaItemList  = ["one","two","three","four","five","six","seven","eight","nine","ten"];
      return GachaItemList;
       
    }      


}