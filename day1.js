const formContainer = document.getElementById('formContainer');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const dynamicBooksDiv = document.getElementById('books-wrapper');

const books = JSON.parse(localStorage.getItem('booksDetails')) || [];

const addBook = (title, author, id) => {
  const loadedBooks = JSON.parse(localStorage.getItem('booksDetails')) || [];
  loadedBooks.push({
    title,
    author,
    id,
  });
  localStorage.setItem('booksDetails', JSON.stringify(loadedBooks));
  return { title, author, id };
};

const deleteBook = (id) => {
  const mybooks = JSON.parse(localStorage.getItem('booksDetails'));
  const filteredBooks = mybooks.filter((book) => book.id !== id);
  localStorage.setItem('booksDetails', JSON.stringify(filteredBooks));
};

const createBook = ({ title, author, id }) => {
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const h4 = document.createElement('h4');
  const removeBtn = document.createElement('button');

  div.className = 'book-div';
  h3.innerText = `Title : ${title}`;
  h4.innerText = `Author :${author}`;
  removeBtn.innerHTML = 'remove';
  removeBtn.dataset.id = id;
  removeBtn.type = 'button';
  removeBtn.className = 'removeBtn';
  removeBtn.addEventListener('click', () => {
    deleteBook(id);
    dynamicBooksDiv.removeChild(div);
  });

  div.append(h3, h4, removeBtn);
  dynamicBooksDiv.appendChild(div);
};

books.forEach(createBook);

formContainer.onsubmit = (e) => {
  e.preventDefault();
  let id = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  const newBook = addBook(bookTitle.value, bookAuthor.value, id);
  createBook(newBook);
  bookTitle.value = '';
  bookAuthor.value = '';
  id = '';
};

document.querySelectorAll('.removeBtn').forEach((removeBtn) => {
  removeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteBook(removeBtn.dataset.id);
  });
});
