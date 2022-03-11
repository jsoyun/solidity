const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//관습:string문자 포함된 변수는 대문자로 표기하고 string저장하고 싶을때 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; //string을 반복해서 쓸경우 이렇게 변수로 정해주는게 좋아
function submitButton(event) {
  //form은 입력하면 자동submit돼서 그걸 막아주는 함수
  event.preventDefault();

  const usernameLoginInput = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, usernameLoginInput);
  //   console.log(usernameLoginInput);
  paintGreetings();
}

//반복하는 작업함수로
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", submitButton);
//공짜로 브라우저에 정보기억에 남기는 API 는 local storage

//유저내임있으면 form 안뜨고 없으면 form 뜨게! 불렀을때 null이면 form

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", submitButton);
} else {
  //localStorage에 있어서 인자를 넣을필요없음
  paintGreetings();
}
