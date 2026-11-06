window.addEventListener("scroll", function() {
  const header = document.getElementById("siteHeader");
  
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("quoteModal");
  const openBtns = document.querySelectorAll(".quote");
  const closeBtn = document.getElementById("closeModalBtn");
  const form = document.getElementById("quoteForm");

  // Aggiungi l'evento di apertura a tutti i bottoni "Richiedi preventivo"
  openBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("active");
    });
  });

  // Chiusura con il pulsante X
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.classList.remove("active");
    });
  }

  // Chiusura cliccando sullo sfondo scuro
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // Chiusura con il tasto ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });

  // Invio del form
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Richiesta inviata con successo!");
      modal.classList.remove("active");
      form.reset();
    });
  }
});