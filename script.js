const bklist = document.querySelector('.bklist');
const bkTitle = document.getElementById('title');
const bkAuthor = document.getElementById('author');
const form = document.getElementById('form');
let id = 0;
let books = [];
if (localStorage.getItem('Data-base') !== null) {
  books = JSON.parse(localStorage.getItem('Data-base'));
}

function removeBook(r) {
  r.target.parentElement.remove();
  books.splice(r, 1);
  localStorage.setItem('Data-base', JSON.stringify(books));
}

function addBook(elem) {
  books.push({
    id,
    title: bkTitle.value,
    author: bkAuthor.value,
  });
  id += 1;
  elem.preventDefault();

  const li = document.createElement('li');
  li.setAttribute('id', `${id}`);

  const titleTxt = document.createElement('li');
  const AuthorTxt = document.createElement('li');
  const btnRemove = document.createElement('button');

  titleTxt.innerHTML = bkTitle.value;
  AuthorTxt.innerHTML = bkAuthor.value;
  btnRemove.textContent = 'remove';

  li.appendChild(titleTxt);
  li.appendChild(AuthorTxt);
  li.appendChild(btnRemove);

  bklist.appendChild(li);

  btnRemove.addEventListener('click', removeBook);
  localStorage.setItem('Data-base', JSON.stringify(books));
  bkAuthor.value = '';
  bkTitle.value = '';
}

form.addEventListener('submit', addBook);