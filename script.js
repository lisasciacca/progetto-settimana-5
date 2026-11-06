window.addEventListener("scroll", function() {
  const header = document.getElementById("siteHeader");
  
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
