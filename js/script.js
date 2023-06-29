feather.replace();

// To make dragdown when hit the icon on navbar
function show_content() {
  var click = document.getElementById("list-content");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

// To make profile picture scale up when mouseover
var profile = document.querySelector("#developer img");

profile.addEventListener("mouseover", function () {
  profile.style.transform = "scale(1.05)";
  profile.style.transition = "transform 0.5s ease";
});

profile.addEventListener("mouseout", function () {
  profile.style.transform = "scale(1)";
  profile.style.transition = "transform 0.5s ease";
});
