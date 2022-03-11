//바닐라 코드 강의 #3.2
//쿼리셀렉터는 class명이랑 태그까지 세분화선택한번에
const title = document.getElementById("hello");

title.innerText = "yu";

console.dir(title);

const test = document.querySelector(".test h1");
test.innerText = "eee";
console.log(test);

title.style.color = "blue";

//이벤트 추가

//이벤트가 잘됐는지 확인하기 위한 함수
function handTitleClick() {
  console.log("클릭됐음요");
  title.style.color = "red";
}
//클릭이벤트 발생하면 핸들함수 실행
test.addEventListener("click", handTitleClick);
//이걸 이렇게 바꿀수도 있음
test.onClick = handTitleClick;

//listen하고 싶은 event 찾는 방법
//구글에 찾고 싶은 element의 이름 예) h1 html element mdn

function handleMouseEnter() {
  console.log("mouse is here");
}

test.addEventListener("mouseenter", handleMouseEnter);
test.onmouseenter = handleMouseEnter; //둘이 같음

//window

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier");
}
function handleWindowOffline() {
  alert("SOS WIfi");
}
function handleWindowOnline() {
  alert("good");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

//조건사용해서 하기
function handleTestClick() {
  if (test.style.color == "blue") {
    test.style.color = "tomato";
  } else {
    test.style.color = "blue";
  }
}

test.addEventListener("click", handleTestClick);
//조건사용해서 하기
function handleREtitleClick() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor == "red") {
    newColor = "pink";
  } else {
    newColor = "red";
  }
  title.style.color = newColor;
}

test.addEventListener("click", handleREtitleClick);

//////////

//toggle  : add, remove를 한번에~~
function handleToggleTest() {
  test.classList.toggle("clicked");
}

test.addEventListener("click", handleToggleTest);
