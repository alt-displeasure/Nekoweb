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
