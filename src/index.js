let toDoItems = [];
let parents = ["index"];

//Create a new toDo object
class ToDo {
    constructor(title, description, dueDate, priority) {
        this.parent = 'index'
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

function createNewToDo(title, description, dueDate, priority) {
    let newToDo = new ToDo(title, description, dueDate, priority);
    toDoItems.push(newToDo);
}

function createParent(name) {
    parents.indexOf(name) === -1 ? parents.push(name): 0; //if the new parent doesn't already exist, add it to the parents array
}

function changeParent(index, newParent) {
    if (parents.indexOf(newParent) !== -1) {
        toDoItems[index].parent = newParent;
    }
    //toDoItems[index].parent
}

createNewToDo('Go for a walk', 'go for a walk outside with nova for at least 20 minutes', '4/20/22', 'high');
createNewToDo('Make to do list app', 'code it with javascript', '4/22/22', 'medium');

createParent('Home');
changeParent(0, 'Home');

console.log(parents);
console.log(toDoItems);