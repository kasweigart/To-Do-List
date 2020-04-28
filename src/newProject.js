const newProj = function () {
  const storedProjects = [];


  const newProjectButton = document.getElementById('newProjectButton');
  const projNameField = document.getElementById('projNameField');
  const projects = document.getElementById('projects');
  const noNewProj = document.getElementById('noNewProj');

  noNewProj.innerText = 'No new projects. Create one above!';


  newProjectButton.addEventListener('click', (e) => {
    if (projNameField.value == '') {
      return;
    }

    e.preventDefault();
    projects.innerHTML += `<li><a href="#">${projNameField.value}</a></li>`;
    storedProjects.push(projNameField.value);
    projNameField.value = '';
    console.log(storedProjects);
    if (storedProjects !== []) {
      noNewProj.innerText = '';
    } else {
      noNewProj.innerText = 'No new projects. Create one above!';
    }
  });
};

export { newProj };
