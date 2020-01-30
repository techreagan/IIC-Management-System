document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems);

  const dropDownElems = document.querySelectorAll('.dropdown-trigger');
  const dropDownInstances = M.Dropdown.init(dropDownElems);

  const modalElement = document.querySelector('.modal');
  const modalInstance = M.Modal.init(modalElement);
  const tableBody = document.querySelector('#tableBody');

  if (document.body.contains(tableBody)) {
    tableBody.addEventListener('click', e => {
      if (
        e.target.parentElement.classList.contains('delete-btn') ||
        e.target.classList.contains('delete-btn')
      ) {
        modalElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.value =
          e.target.dataset.id;
      }
    });
  }
});
const message = document.querySelector('#message').value;

if (message) {
  M.toast({ html: message, classes: 'green', displayLength: 8000 });
}
