document.addEventListener('DOMContentLoaded', function (event) {
  // Selectors
  let list = document.querySelector('#list');
  let txtAddItem = document.querySelector('#txtAddItem');
  let btnAddItem = document.querySelector('#btnAddItem');
  let btnRemoveList = document.querySelector('#btnRemoveList');
  // Event handlers
  txtAddItem.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    switch (event.key) {
      case 'Enter':
        // Do something for "enter" or "return" key press.
        addItem();
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  btnAddItem.addEventListener('click', addItem);
  btnRemoveList.addEventListener('click', function (event) {
    removeList();
  });
  // Functions calls
  loadList();
  // Functions
  function saveList () {
    localStorage.setItem('todoList', list.innerHTML);
  }
  function removeList () {
    localStorage.clear('todoList');
    list.innerHTML = '';
  }
  function loadList () {
    let savedList = localStorage.getItem('todoList');
    if (savedList) {
      list.innerHTML = savedList;
      let listItems = list.querySelectorAll('li');
      listItems.forEach(function (item) {
        item.setAttribute('draggable', 'true');
        item.addEventListener('click', function (event) {
          this.setAttribute('contenteditable', 'true');
        });
        item.addEventListener('blur', function (event) {
          this.removeAttribute('contenteditable');
          saveList();
        });
      });
    }
  }
  function createItem (value) {
    let item = document.createElement('li');
    // item.setAttribute('contenteditable', 'true');
    item.addEventListener('click', function (event) {
      this.setAttribute('contenteditable', 'true');
    });
    item.addEventListener('blur', function (event) {
      this.removeAttribute('contenteditable');
      saveList();
    });
    item.textContent = value;
    list.append(item);
  }
  function addItem () {
    let value = txtAddItem.value;
    if (value) {
      createItem(value);
      saveList();
      txtAddItem.value = '';
      txtAddItem.focus();
    }
  }
});
