import {projects} from "./index";

//Create a new task in the active project
function createNewToDo(title, description, dueDate, priority) {
    _clearActiveProjects();
    getActiveProject().tasks.push({
        title, 
        description, 
        dueDate, 
        priority, 
        complete: false,
    })
}


function createProject(name) {
    _clearActiveProjects();
    projects.push({
        name, 
        tasks: [],
        active: true,
    })
}

function getActiveProject() {
    let activeProjects = projects.filter(project => project.active);
    return activeProjects[0];
}

function _clearActiveProjects() {
    projects.forEach(project => project.active = false);
}

function toggleComplete(index) {
    if (getActiveProject().tasks[index].complete === false) {
        getActiveProject.tasks[index].complete = true;
    } else {
        getActiveProject.tasks[index].complete = false;
    }
}

function deleteTask(index) {
    getActiveProject().tasks.splice(index, 1);
}

export {createNewToDo, createProject, changeProject, toggleComplete};