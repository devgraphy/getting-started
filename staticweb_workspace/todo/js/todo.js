let todoInputHandler = function(){
    const result = todos.map(todo => todo.todoNum);
    const maxTodoNum = Math.max.apply(null, result);
    const addTitle = document.getElementById("todoInput").nodeValue;
    let todo = {todoNum: maxTodoNum+1, title: addTitle };
    todo.push(todo);
    displayList();
}

let todoDeleteHandler = function(todoNum){
    //todos 배열에서 todoNum에 해당하는 데이터 삭제
    const index = todos.findIndex(todo => todo.todoNum == todoNum);
    todos.splice(index, 1);
    //todoList rendering
    displayList();
}

let todoClear = function(){
    
}


function displayList(){
    const todoList = document.getElementById("todoList");
    let dataList ="";
    todos.array.forEach(todo => {
        dataList += `
        <li class="shadow">
            <i aria-hidden="true" class="checkBtn fa fa-check"></i>
            ${todo.title}
            <span type="button" class="removeBtn">
                <i aria-hidden="true" class="fa fa-trash-o"></i>
            </span>
        </li>`
    });
}
