$(document).ready(init);
console.log('js');

const tasks = [];
// let completed = 0;

function init() {
  console.log('Do the thing');
  $('.js-addTask').on('click', addToList);
}

function addToList(event) {
  event.preventDefault();

  const nTask = {
    name: $('#js-form-addTask').val(),
    completed: $('#js-completeTask').val()
  };

  //   let completed = false; not sure if this needs to be here atm. Come back and check it later

  tasks.push(addToList);

  $('#js-form-addTask').val(''), $('#js-completeTask').val('');
  console.log('New Task Added', addToList);

  renderTask();
}

function renderTask() {
  $('.js-toDoList').empty();

  for (let task of tasks) {
    $('.js-toDoList').append(`
        <li>${task.name}</li><button class='complete'></button>
        `);
  }
}
