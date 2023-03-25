

// let todos = ['Get Groceries','Wash Car','Make Dinner'];
let todos = [{
    title:'Get Groceries',
    dueDate: '2022-10-05',
    id : 'id1'
},{
    title:'Wash Car',
    dueDate: '2022-10-07',
    id : 'id2'
},{
    title:'Wash Car',
    dueDate: '2022-10-07',
    id: 'id3'
}]

render()

function createToDo(title,dueDate) {
    const id = new Date().getTime();
    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

    render();
}
function removeToDo(idToDelete) {
    todos = todos.filter(function (todo) {
        if(idToDelete==todo.id){
            return false
        }
        else{
            return true;
        }
    })
}

function addToDo() {
    let textcontent = document.getElementById('todo-title');
    let title = textcontent.value
    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;
    createToDo(title,dueDate);
}

function deleteToDo(event){
    console.log(event);
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
    removeToDo(idToDelete);
    render();
}
function render() {

    document.getElementById('todo-list').innerHTML=''

    todos.forEach(function (todo) {
        let element = document.createElement('div');
        element.innerText = todo.title+' '+todo.dueDate;

        const deleteButton = document.createElement('button');
        deleteButton.innerText='Delete ToDo'
        deleteButton.style='margin-left: 10px'
        deleteButton.id = todo.id;

        deleteButton.onclick=deleteToDo;
        element.appendChild(deleteButton)

        let todoList = document.getElementById('todo-list')
        todoList.appendChild(element);
    });
}