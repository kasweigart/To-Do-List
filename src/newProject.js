//FACTORY FUNCTION FOR CREATING TODOS
function createToDo(title, desc, dueDate, priority) {
    return {
        title,
        desc,
        dueDate,
        priority
    };
}

let projects = [];

const newProjEvent = function () {
  const newProjectButton = document.getElementById("newProjectButton");
  const projNameField = document.getElementById("projNameField");
  const projects = document.getElementById('projects');

  newProjectButton.addEventListener("click", function () {
      if (projNameField.value == '') {
          return;
      }
    projects.innerHTML += `<li><a href="#">${projNameField.value}</a></li>`;
    projNameField.value = '';
  });
};

export { newProjEvent };
