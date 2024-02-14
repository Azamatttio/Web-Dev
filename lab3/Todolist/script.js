const todoList = document.getElementById('list');
const newItemInput = document.getElementById('input');
const addItemButton = document.getElementById('button');
let todoItems = [];
function renderTodoList() {
  todoList.innerHTML = '';
  todoItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('item');
    if (item.completed) {
      listItem.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.checked = item.completed;
    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      localStorage.setItem('todoList', JSON.stringify(todoItems));
      listItem.classList.toggle('completed');
    });

    const text = document.createElement('span');
    text.textContent = item.text;

    const deleteButton = document.createElement('button');
    deleteButton.style.margin = '10px';
    deleteButton.style.fontSize = '20px';
    deleteButton.style.background = 'inherit';
    deleteButton.style.border = 'none';
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash');
    deleteButton.appendChild(trashIcon);
    deleteButton.addEventListener('click', () => {
      todoItems.splice(index, 1);
      localStorage.setItem('todoList', JSON.stringify(todoItems));
      renderTodoList();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  });
}

addItemButton.addEventListener('click', () => {
  const newItemText = newItemInput.value.trim();
  if (newItemText) {
    const newItem = {
      text: newItemText,
      completed: false
    };
    todoItems.push(newItem);
    localStorage.setItem('todoList', JSON.stringify(todoItems));
    renderTodoList();
    newItemInput.value = '';
  }
});