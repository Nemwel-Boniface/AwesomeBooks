const bklist = document.querySelector('.books-wrapper');
const bkTitle = document.getElementById('title');
const bkAuthor = document.getElementById('author');
const addBtn = document.querySelector('.add-btn');
const time = document.querySelector('.time');

class Library {
  constructor() {
    this.books = [
      {
        title: 'Things Fall Apart',
        author: 'Chinua Achebe',
      },
      {
        title: 'The Way Of Men',
        author: 'Jack Donovan',
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

// day3 javascript full app look

const nav = document.querySelector('.nav');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const footer = document.querySelector('.footer');
const listBtn = document.getElementById('list');
const addNewBtn = document.getElementById('addNew');
const contactBtn = document.getElementById('contact');

// functions for SPA

const listShow = () => {
  section1.classList.remove('dis-none');
  section2.classList.add('dis-none');
  section3.classList.add('dis-none');
  listBtn.classList.add('active-btn');
  addNewBtn.classList.remove('active-btn');
  contactBtn.classList.remove('active-btn');
}
const addNewShow = () => {
  section2.classList.remove('dis-none');
  section1.classList.add('dis-none');
  section3.classList.add('dis-none');
  addNewBtn.classList.add('active-btn');
  listBtn.classList.remove('active-btn');
  contactBtn.classList.remove('active-btn');
}
const contactShow = () => {
  section3.classList.remove('dis-none');
  section1.classList.add('dis-none');
  section2.classList.add('dis-none');
  contactBtn.classList.add('active-btn');
  addNewBtn.classList.remove('active-btn');
  listBtn.classList.remove('active-btn');
}
contactBtn.addEventListener('click',contactShow);
listBtn.addEventListener('click',listShow);
addNewBtn.addEventListener('click',addNewShow);

const setTime = () => {
  const date = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDate();
  let minutes = date.getMinutes();
  const hours = date.getHours();
  let seconds = date.getSeconds();

  if (seconds.toString().length < 2) {
    seconds = `0${seconds}`;
  }
  if (minutes.toString().length < 2) {
    minutes = `0${minutes}`;
  }

  const currentTime = `${month} ${day}th ${year}, ${hours}:${minutes}:${seconds}`;
  time.textContent = '';
  time.textContent = `${currentTime}`;
};
setTime();

