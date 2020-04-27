const prioritySelectEvent = function () {
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

const deleteToDoEvent = function () {
  $(".table").on("click", "#deleteButton", function (event) {
    event.target.parentElement.parentElement.remove();
  });
};

export { prioritySelectEvent, deleteToDoEvent };
