const newProj = function () {
  let storedProjects = [];

  const newProjectButton = document.getElementById("newProjectButton");
  const projNameField = document.getElementById("projNameField");
  const projects = document.getElementById('projects');
  

  newProjectButton.addEventListener("click", function () {
      if (projNameField.value == '') {
          return;
      }
    projects.innerHTML += `<li><a href="#">${projNameField.value}</a></li>`;
    storedProjects.push(projNameField.value);
    projNameField.value = '';
    console.log(storedProjects);
  });

};

export { newProj };
