// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Voting{
    //후보자들을 초기화하기 위한 컨트랙트
    //후보자 투표
    //각 포보자의 표를 모으는
    bytes32[] public candidateList;
    //연관배열 "Rama" => 5 라바는 다섯표얻음 이런식으로 묶어주는거
    mapping (bytes32 => uint8) public votesReceived;

    constructor(bytes32[] memory candidateNames) {
        candidateList = candidateNames;
    }

    function voteForCandidate(bytes32 candidate) public {
        require(validCandidate(candidate));
        //득표수 담기는 곳 매번 누군가가 후보자 투표할때마다 득표수 1올리가게끔
        votesReceived[candidate] += 1;
    }
                                                 //얼마나 얻었는지 득표수 반환
    function totalVotesFor(bytes32 candidate) view public returns(uint8) {
        require(validCandidate(candidate));
        //단순읽기 호출
        return votesReceived[candidate];

    }
    //유효한 후보인지 확인
    function validCandidate(bytes32 candidate) view public returns(bool){
        //후보자 명단 훑어서 확인
        for(uint i = 0; i < candidateList.length; i++) {
            if(candidateList[i] == candidate) {
                return true;
            }
        }
        return false;

    }
}