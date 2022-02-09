const bklist = document.querySelector('.books-wrapper');
const bkTitle = document.getElementById('title');
const bkAuthor = document.getElementById('author');
const addBtn = document.querySelector('.add-btn');

class Library {
  constructor() {
    this.books = [
      {
        title: 'Manger',
        author: 'Cuisinier',
      },
      {
        title: 'Baron',
        author: 'Fredrick',
      },
    ];
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.setLocalStorage();
    this.displayBooks();
  }

  setLocalStorage() {
    localStorage.setItem('Data-base', JSON.stringify(this.books));
  }

  getLocalStorage() {
    if (localStorage.getItem('Data-base')) {
      this.books = JSON.parse(localStorage.getItem('Data-base'));
    }
    this.displayBooks();
  }

  addBook(title, author) {
    this.books.push({
      title,
      author,
    });

    bkAuthor.value = '';
    bkTitle.value = '';
    this.setLocalStorage();
    this.displayBooks();
  }

  displayBooks() {
    bklist.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      const description = document.createElement('p');

      const btnRemove = document.createElement('button');
      description.textContent = `"${book.title}" by ${book.author}`;
      btnRemove.textContent = 'remove';
      btnRemove.classList.add('remove');

      li.append(description, btnRemove);
      btnRemove.addEventListener('click', () => {
        this.removeBook(index);
      });
      bklist.appendChild(li);
    });
  }
}
const myLib = new Library();
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  myLib.addBook(bkTitle.value, bkAuthor.value);
});

document.addEventListener('DOMContentLoaded', () => {
  myLib.getLocalStorage();
});
