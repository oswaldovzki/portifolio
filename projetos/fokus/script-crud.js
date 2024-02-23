const btnAddTask = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTasks = document.querySelector('.app__section-task-list');

const taskList = JSON.parse(localStorage.getItem('taskList')) || []; //O || adiciona uma condicional. Se o array não existir, ele faz um vazio.

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
        paragraph.textContent = newDescription;
    }

    const buttonImg = document.createElement('img');
    buttonImg.setAttribute('src','./imagens/edit.png');
    button.append(buttonImg);

    li.append(svg);
    li.append(paragraph);
    li.append(button);

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
    localStorage.setItem('taskList', JSON.stringify(taskList));
    textArea.value = '';
    formAddTask.classList.add('hidden');
}) 

taskList.forEach(task => {
    const taskElement = createElementTask(task);
    ulTasks.append(taskElement);
})
