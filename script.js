const tasks = [];

function renderElements(tasksArray) {

  const ulTasks = document.querySelector('.tasks__list');

  ulTasks.innerHTML = '';

  tasksArray.forEach(renderElements => {
    let cuurentTaskLi = createTasksItem(renderElements);
    ulTasks.append(cuurentTaskLi);
  });

}


function createTasksItem(tasksObject) {
  const liTask = document.createElement('li');
  const divTask = document.createElement('div');
  const spanTask = document.createElement('span');
  const pTask = document.createElement('p');
  const buttonRemoveTask = document.createElement('button');
  
  liTask.classList.add('task__item');
  divTask.classList.add('task-info__container');
  spanTask.classList.add('task-type');
  pTask.innerHTML = tasksObject.title;
  buttonRemoveTask.classList.add('task__button--remove-task');
  
  
  if(tasksObject.type === 'normal') {
    spanTask.classList.add('span-normal');
  } else if(tasksObject.type === 'urgente') {
    spanTask.classList.add('span-urgent');
  } else if(tasksObject.type === 'importante') {
    spanTask.classList.add('span-important');
  }
  
  buttonRemoveTask.addEventListener('click', () => {
    const index = tasks.indexOf(tasksObject);
    
    tasks.splice(index, 1);
    
    renderElements(tasks)  
  });

  divTask.append(spanTask, pTask);
  liTask.append(divTask, buttonRemoveTask);
  
  return liTask;
}


  const buttonAddTask = document.querySelector('.form__button--add-task');

  buttonAddTask.addEventListener('click', (event) => {
    event.preventDefault();
    
    const inputText = document.querySelector('.form__input--text');
    const inputPriority = document.querySelector('.form__input--priority');
  
    const newTask = {
      title: inputText.value,
      type: inputPriority.value,
    }

    tasks.push(newTask);

    renderElements(tasks);

    inputText.value = ''
    inputPriority.value = ''   
  });