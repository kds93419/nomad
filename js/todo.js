const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
  //localStorage.setItem("todos",toDos);
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));

}

function deleteToDo(event){
  const li = event.target.parentElement;
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
  console.log(typeof li.id);
}


function paintToDo(newTodo){
  console.log("i will paint", newTodo);
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click",deleteToDo )
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}



function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  const newTodoOnj = {
    text:newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoOnj);
  paintToDo(newTodoOnj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
  console.log("this is the turn off tiem", item);
}


const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //parsedToDos.forEach(sayHello);  //forEach는 array의 각 item에 대해 function을 실행하게 해줘
  //parsedToDos.forEach((item) => console.log("this is thurn off " . item)); sayHello function이랑 같은 기능함
  parsedToDos.forEach(paintToDo);
}


