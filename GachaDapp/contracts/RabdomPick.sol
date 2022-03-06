// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RabdomPick {

    event pickResult(address indexed _pickAddr, uint indexed _pickCount, uint _pickItem);
    event bonusPickResult(address indexed _pickAddr, uint _pickItem);

    address private owner;

    constructor  (){
        owner = msg.sender;
    }

    receive()external payable {} //이더 수신
    
    // 아이템 리스트
    uint[10] public itemList = [1,2,3,4,5,6,7,8,9,10];

    uint private pickCount; // 뽑기 횟수
    mapping(address=>uint[]) public itemsPerAddress; //계정당 아이템
    mapping(address=>uint) private pickCountPerAddress; //계정당 뽑기 횟수
    mapping(address=>bool) private bonusTurn; // 보너스 뽑기



    function randomPick () public payable {
        require(msg.value == 2*10**16, "value is not correct");
        uint random = itemList[randomItem()];
        itemsPerAddress[msg.sender].push(random);

        pickCountPerAddress[msg.sender]++;

        emit pickResult(msg.sender, pickCountPerAddress[msg.sender], random);

        if(pickCountPerAddress[msg.sender] % 5 == 0){
            bonusTurn[msg.sender] = true;
        }
    }

    function bonusPick() public {
        require(bonusTurn[msg.sender]==true,"no bonus turn");
        pickCount++;
        uint bonus = itemList[randomItem()];
        itemsPerAddress[msg.sender].push(bonus);
        emit bonusPickResult(msg.sender,bonus);
        bonusTurn[msg.sender] = false;
    }

    //난수 생성
    function randomItem() public view returns(uint){
        return  uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, pickCount, pickCountPerAddress[msg.sender]))) % 10 + 1;
    }

    function getItemsPerAddress() public view returns(uint[] memory){
        return itemsPerAddress[msg.sender];
    }

}