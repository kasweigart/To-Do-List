const toDo = function () {
  let toDos = [];

  const titleInput = document.querySelector('#title');
  const descInput = document.querySelector('#description');
  const dueDateInput = document.querySelector('#dueDate');
  const newToDoButton = document.querySelector('#newToDo');

  const toDoFactory = function(title, desc, dueDate, priority) {
    return {
        title,
        desc,
        dueDate,
        priority
    };

  }

  const newToDo = function () {
    const createToDo = toDoFactory(titleInput.value, descInput.value, dueDateInput.value, '');
    const blankMessage = document.querySelector('#blankMessage');
    blankMessage.remove();
    renderToDo(createToDo);
    toDos.push(createToDo);
    console.log(toDos)
  }

  newToDoButton.addEventListener('click', newToDo);
}

const prioritySelect = function () {
  $('.dropdown').on('click', "#high", function (event) {
      const selectButton = event.target.parentElement.parentElement.firstElementChild;
      selectButton.innerText = 'High';
      selectButton.setAttribute('class', 'btn btn-warning');
  })
  $('.dropdown').on('click', "#low", function (event) {
      const selectButton = event.target.parentElement.parentElement.firstElementChild;
      selectButton.innerText = 'Low';
      selectButton.setAttribute('class', 'btn btn-success');
  })
}

const deleteToDo = function () {
$(".table").on("click", "#deleteButton", function (event) {
  event.target.parentElement.parentElement.remove();
});
};

const renderToDo = function (createToDo) {
  const toDoTable = document.querySelector('.table');
    const addToDoHTML = `<tr>
    <td>${createToDo.title}</td>
    <td>${createToDo.desc}</td>
    <td>${createToDo.dueDate}</td>
    <td><div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a id='high' class="dropdown-item" href="#">High</a>
        <a id='low' class="dropdown-item" href="#">Low</a>
      </div>
    </div></td>
    <td><button type="button" class="btn btn-danger" id='deleteButton'>Delete</button></td>
  </tr>`;

  toDoTable.innerHTML += addToDoHTML;
  prioritySelect();
}



export { toDo, renderToDo, prioritySelect, deleteToDo };
