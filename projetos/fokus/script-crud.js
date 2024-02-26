const btnAddTask = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTasks = document.querySelector('.app__section-task-list');
const btnCancel = document.querySelector('.app__form-footer__button--cancel');
const taskInProgress = document.querySelector('.app__section-active-task-description');
const btnRemoveActive = document.querySelector('#btn-remover-concluidas');
const btnRemoveAll = document.querySelector('#btn-remover-todas');

var taskList = JSON.parse(localStorage.getItem('taskList')) || []; //O || adiciona uma condicional. Se o array não existir, ele faz um vazio.

let activeTask = null
let liActiveTask = null

function updateTask() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

function cancelNewTask() {
    textArea.value = '';
    formAddTask.classList.add('hidden');
    consoleLog('Criação de nova tarefa cancelada.')
}

function createElementTask(task) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>
    `

    const paragraph = document.createElement('p');
    paragraph.textContent = task.description;
    paragraph.classList.add('app__section-task-list-item-description');

    const button = document.createElement('button');
    button.classList.add('app_button-edit');
    button.onclick = () => {
        const newDescription = prompt("Digite o novo nome da Tarefa");
        if (newDescription) {
            paragraph.textContent = newDescription;
            task.description = newDescription
            updateTask()
            consoleLog(`Descrição atualizada com o novo texto: "${newDescription}"`)
        } else if (newDescription == null) {
            consoleLog('Usuário cancelou a operação')
            return
        } else {
            alert('digite uma descrição válida')
            consoleLog('Usuário inseriu uma descrição vazia.')
        }
    }

    const buttonImg = document.createElement('img');
    buttonImg.setAttribute('src','./imagens/edit.png');
    button.append(buttonImg);

    li.append(svg);
    li.append(paragraph);
    li.append(button);

    if (task.complete) {
        li.classList.add('app__section-task-list-item-complete');
        button.setAttribute('disabled', 'disabled');
    } else {
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item-active')
                .forEach(element => {
                    element.classList.remove('app__section-task-list-item-active');
                })
            if (activeTask == task) {
                taskInProgress.textContent = '';
                activeTask = null;
                liActiveTask = null;
                return;
            }
            activeTask = task;
            liActiveTask = li;
            taskInProgress.textContent = task.description;
            li.classList.add('app__section-task-list-item-active');
        }
    }


    return li;
}

btnAddTask.addEventListener('click', () => {
    formAddTask.classList.toggle('hidden');
})

formAddTask.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = {
        description: textArea.value
    }
    taskList.push(task);
    const elementTask = createElementTask(task);
    ulTasks.append(elementTask);
    updateTask();
    textArea.value = '';
    formAddTask.classList.add('hidden');
})

btnCancel.addEventListener('click', cancelNewTask) // Cancelamento da adição de nova tarefa

taskList.forEach(task => {
    const taskElement = createElementTask(task);
    ulTasks.append(taskElement);
})

document.addEventListener('FocusEnding', () => {
    if (activeTask && liActiveTask) {
        liActiveTask.classList.remove('app__section-task-list-item-active');
        liActiveTask.classList.add('app__section-task-list-item-complete');
        liActiveTask.querySelector('button').setAttribute('disabled', 'disabled');
        activeTask.complete = true
        updateTask()
    }
})

const removeTasks = (completeOnly) => {
    const selector = completeOnly ? ".app__section-task-list-item-complete" : ".app__section-task-list-item";
    document.querySelectorAll(selector).forEach(element => {
        element.remove()
    })
    taskList = completeOnly ? taskList.filter(tasks => !tasks.complete) : [];
    updateTask();
}

function consoleLog(text) {
    console.log(text);
}

btnRemoveActive.onclick = () => {removeTasks(true)};
btnRemoveAll.onclick = () => {removeTasks(false)};
