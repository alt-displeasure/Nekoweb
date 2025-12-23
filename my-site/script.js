// Page select and switch
function aboutSwitch() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("books").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  document.getElementById("about").style.width = "55%";
  $("#about").load("about.html");
}

function homeSwitch() {
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("books").style.display = "none";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";
}

function booksSwitch() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("books").style.display = "block";
  document.getElementById("blog").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("resources").style.display = "none";

  document.getElementById("books").style.width = "55%";
  $("#books").load("books.html");
}