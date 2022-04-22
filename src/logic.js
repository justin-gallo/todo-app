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
        this.complete = false
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
}

function markComplete(index) {
    if (toDoItems[index].complete === false) {
        toDoItems[index].complete = true;
    }
}

export {createNewToDo, createParent, changeParent, markComplete};