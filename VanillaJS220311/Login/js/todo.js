const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let Todos = [];

//Todos 배열의 내용을 localStorage에 저장하는 함수
function saveToDos() {
  //키값, 저장할 값(여기는 배열)
  localStorage.setItem(TODOS_KEY, JSON.stringify(Todos));
}

function deleteToDo(event) {
  //문제는 어떤 버튼을 눌렀는지 알아야함. //버튼누른것의 부모,li를 알려줌
  const li = event.target.parentElement;
  li.remove();
  //클릭한 li의 id를 갖고 있는 toDo를 지우고 싶음
  Todos = Todos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const MakeLiTag = document.createElement("li");
  MakeLiTag.id = newTodo.id;
  const MakeSpanTag = document.createElement("span");
  MakeSpanTag.innerText = newTodo.text;
  const MakeButtonTag = document.createElement("button");
  MakeButtonTag.innerText = "❌";
  MakeButtonTag.addEventListener("click", deleteToDo);
  MakeLiTag.appendChild(MakeSpanTag); //li의 자식으로 span넣기
  MakeLiTag.appendChild(MakeButtonTag); //li의 자식으로 span넣기
  toDoList.appendChild(MakeLiTag);
}

function handleToDoSumit(event) {
  event.preventDefault();
  console.log(toDoInput.value);
  //값 저장,새변수에 복사해서
  const newTodo = toDoInput.value;
  //칸에 글을 입력하고 비우고 싶다
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  Todos.push(newTodoObj);

  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSumit);

//로컬에 저장한 것 가져옴
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos, "저장한투두값");
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  Todos = parsedToDos; //기존 배열에 값들
  console.log(parsedToDos, "타입바꿈");
  parsedToDos.forEach(paintToDo);
}
