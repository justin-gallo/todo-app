export let toDoItems = [];
export let projects = ["index"];

//Create a new toDo object
class ToDo {
    constructor(title, description, dueDate, priority) {
        this.project = 'index' //new tasks are by default created in the "index"
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.complete = false //Tasks are created with the default state of "not completed"
    }
}

function createNewToDo(title, description, dueDate, priority) {
    let newToDo = new ToDo(title, description, dueDate, priority);
    toDoItems.push(newToDo);
}

function createProject(name) {
    projects.indexOf(name) === -1 ? projects.push(name): 0; //if the new project doesn't already exist, add it to the projects array
}

function changeProject(index, newProject) {
    if (projects.indexOf(newProject) !== -1) {
        toDoItems[index].project = newProject;
    }
}

function markComplete(index) {
    if (toDoItems[index].complete === false) {
        toDoItems[index].complete = true;
    }
}

export {createNewToDo, createProject, changeProject, markComplete};