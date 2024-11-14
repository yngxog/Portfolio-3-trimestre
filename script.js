function aparecerbotao(id) {
  var div = document.getElementById(id);
  if (div.style.display === "" || div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}