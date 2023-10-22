const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
  const navClassList = navLinks.classList;

  if (navClassList.contains("close")) {
    navClassList.remove("close");
  } else {
    navClassList.add("close");
  }
});
