const body = document.querySelector('body');
const bklist = document.querySelector('.bklist');
const bkTitle = document.getElementById('title');
const bkAuthor = document.getElementById('author');
const form = document.getElementById('form');
let id = 0;
const books = [];

function addBook(elem) {
  books.push({
    id: id,
    title: bkTitle.value,
    author: bkAuthor.value,
  });
  id = id + 1;
  elem.preventDefault();
  let Books = JSON.parse(localStorage.getItem('books')) || [];

  let li = document.createElement('li');
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
}