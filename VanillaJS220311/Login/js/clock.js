const clock = document.querySelector("h2#clock"); //둘다됨

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const secondes = String(date.getSeconds()).padStart(2, "0");
  //clock.innerText = `${date.getHours()}:$((date.getMinutes()}:${date.getSeconds()}`;}(
  clock.innerText = `${hours}:${minutes}:${secondes}`;
}
getClock(); // 코드실행되면 바로 함수 실행되게, 즉시호출
//interval은 매번. (실행함수, 몇초마다)
setInterval(getClock, 1000); //1초
