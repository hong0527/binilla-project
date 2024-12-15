const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

let toDos = [];
const saved = localStorage.getItem("todos");

function todosaving(){
    const toDos_s = JSON.stringify(toDos);
    localStorage.setItem("todos",toDos_s);
    if(saved === null)
    {
        toDoList.classList.toggle("hidden");
    }
    else{
        toDoList.classList.remove("hidden");
    }
}
function deleteList(event){
    const list_ = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(list_.id));
    list_.remove();
    todosaving();
}
function todopaint(newTodo)
{
    const List = document.createElement("Li");
    List.id = newTodo.id;
    const Span = document.createElement("span");
    Span.innerText = newTodo.text;
    const Button =document.createElement("button");
    Button.innerText = "X";
    Button.addEventListener("click",deleteList);

    List.appendChild(Span);
    List.appendChild(Button);


    toDoList.appendChild(List);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = {
        id: Date.now(),
        text: toDoInput.value,
    };

    toDoInput.value = " ";
    toDos.push(newTodo);
    todopaint(newTodo);
    todosaving();
}


if(saved !== null){
    const parsedTodos = JSON.parse(saved);
    toDos = parsedTodos;
    toDos.forEach(todopaint);
}

toDoForm.addEventListener("submit",handleToDoSubmit);