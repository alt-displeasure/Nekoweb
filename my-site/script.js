// Page select and switch
function aboutSwitch() {
  // mains
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("books").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  // right asides
  document.getElementById("right-home").style.display = "block";
  document.getElementById("right-books").style.display = "none";

  // books
  document.getElementById("toBeRead").style.display = "none";
  document.getElementById("book-naufrago").style.display = "none";
  document.getElementById("book-principe").style.display = "none";

  // size
  document.getElementById("about").style.width = "55%";

  // content
  $("#about").load("about.html");
}

function homeSwitch() {
  // mains
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("books").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  // right asides
  document.getElementById("right-home").style.display = "block";
  document.getElementById("right-books").style.display = "none";

  // books
  document.getElementById("toBeRead").style.display = "none";
  document.getElementById("book-naufrago").style.display = "none";
  document.getElementById("book-principe").style.display = "none";
}

function booksSwitch() {
  // mains
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("books").style.display = "block";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  // right asides
  document.getElementById("right-home").style.display = "none";
  document.getElementById("right-books").style.display = "block";

  // books
  document.getElementById("toBeRead").style.display = "none";
  document.getElementById("book-naufrago").style.display = "none";
  document.getElementById("book-principe").style.display = "none";

  // size
  document.getElementById("books").style.width = "55%";

  // content
  $("#books").load("books.html");
  $("#right-books").load("books/aside-books.html");
  
}

function resourcesSwitch() {
  // mains
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("books").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "block";

  // right asides
  document.getElementById("right-home").style.display = "block";
  document.getElementById("right-books").style.display = "none";

  // books
  document.getElementById("toBeRead").style.display = "none";
  document.getElementById("book-naufrago").style.display = "none";
  document.getElementById("book-principe").style.display = "none";

  // size
  document.getElementById("resources").style.width = "55%";

  // content
  $("#resources").load("resources.html");
  
}

// Books switch
function tbrSwitch() {
  // mains
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("books").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  // right asides
  document.getElementById("right-home").style.display = "none";
  document.getElementById("right-books").style.display = "block";

  // books
  document.getElementById("toBeRead").style.display = "block";
  document.getElementById("book-naufrago").style.display = "none";
  document.getElementById("book-principe").style.display = "none";

  // size
  document.getElementById("toBeRead").style.width = "55%";

  // content
  $("#toBeRead").load("books/tbr.html");
}

function naufragoSw() {
  // mains
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("books").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  // right asides
  document.getElementById("right-home").style.display = "none";
  document.getElementById("right-books").style.display = "block";

  // books
  document.getElementById("toBeRead").style.display = "none";
  document.getElementById("book-naufrago").style.display = "block";
  document.getElementById("book-principe").style.display = "none";

  // size
  document.getElementById("book-naufrago").style.width = "55%";

  // content
  $("#book-naufrago").load("books/naufrago.html");
}

function princeSw() {
  // mains
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("books").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  // right asides
  document.getElementById("right-home").style.display = "none";
  document.getElementById("right-books").style.display = "block";

  // books
  document.getElementById("toBeRead").style.display = "none";
  document.getElementById("book-naufrago").style.display = "none";
  document.getElementById("book-principe").style.display = "block";

  // size
  document.getElementById("book-principe").style.width = "55%";
  
  // content
  $("#book-principe").load("books/principe.html");
}