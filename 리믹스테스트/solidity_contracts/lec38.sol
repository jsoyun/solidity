contract lec38{
    //자동차 상태 나타냄
    enum CarStatus{
        //0
        TurnOff,
        //1
        TurnOn,
        Driving,
        Stop
    }
    //상태의 변수
    CarStatus public carStatus;
    
    constructor(){
            // 이넘쓸때 이넘.안의 이름
        carStatus = CarStatus.TurnOff;
    }
    
    event carCurrentStatus(CarStatus _carStatus, uint256 _carStatusInInt);
    
    function turnOnCar() public {
        //자동차에 시동꺼져있어야한다.
          require(carStatus == CarStatus.TurnOff, "To turn on, your car must be turned off");
        //CarStatus화로 나타내는 방법.
        // require(carStatus == CarStatus(0), "To turn on, your car must be turned off");
        //시동켜기
        carStatus = CarStatus.TurnOn;
        //carStatus = CarStatus(1);
           //uint256으로 출력하려면 그렇게 형변환해야 출력할수잇음
        emit carCurrentStatus(carStatus,uint256(carStatus));
    }
    
    //자동차 상태를 운전중으로 변경시켜주는 함수
    function DrivingCar() public {
        //자동차 시동켜져있어야함
        require(carStatus == CarStatus.TurnOn, "To drive a car, your car must be turned on");
        carStatus = CarStatus.Driving;
        emit carCurrentStatus(carStatus,uint256(carStatus));
    }
    //자동차 멈추고 싶다
    function StopCar() public {
        require(carStatus == CarStatus.Driving, "To drive a car, your car must be turned on");
        carStatus = CarStatus.Stop;
        emit carCurrentStatus(carStatus,uint256(carStatus));
    }
    //시동끄기
    function turnOffCar() public {
        
        require(carStatus == CarStatus.TurnOn 
                || carStatus == CarStatus.Stop , "To turn off, your car must be turned on or driving");
        carStatus = CarStatus.TurnOff;
        emit carCurrentStatus(carStatus,uint256(carStatus));
    }
   //자동자가 무슨상태인지 나타내는 함수
    function CheckStatus() public view returns(CarStatus) {
        return carStatus;
    }
}

