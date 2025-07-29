// Képek dinamikus betöltése a portfólióba
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const artworks = [
    { src: "kep1.jpg", title: "Cím 1", year: 2023 },
    { src: "kep2.jpg", title: "Cím 2", year: 2024 },
    // További képek...
  ];

  artworks.forEach((art) => {
    const artItem = document.createElement("div");
    artItem.className = "art-item";
    artItem.innerHTML = `
            <img src="${art.src}" alt="${art.title}">
            <p><strong>${art.title}</strong> (${art.year})</p>
        `;
    gallery.appendChild(artItem);
  });

  // Űrlap elküldése
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Köszönjük az üzenetet! Hamarosan válaszolunk.");
    contactForm.reset();
  });
});
// Animációk kezelése
document.addEventListener("DOMContentLoaded", function () {
  // Görgetés animációk
  const animateOnScroll = function () {
    const aboutImg = document.querySelector(".about-img");
    const aboutText = document.querySelector(".about-text");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const contactForm = document.querySelector(".contact-form");

    // Rólam rész animáció
    if (isInViewport(aboutImg)) {
      aboutImg.classList.add("animate");
    }

    if (isInViewport(aboutText)) {
      aboutText.classList.add("animate");
    }

    // Galéria animáció
    portfolioItems.forEach((item, index) => {
      if (isInViewport(item)) {
        setTimeout(() => {
          item.classList.add("animate");
        }, index * 100);
      }
    });

    // Kapcsolat animáció
    if (isInViewport(contactForm)) {
      contactForm.classList.add("animate");
    }
  };

  // Ellenőrzi, hogy egy elem látható-e a viewportban
  const isInViewport = function (element) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  // Eseményfigyelő hozzáadása
  window.addEventListener("scroll", animateOnScroll);
  window.addEventListener("load", animateOnScroll);

  // Szűrő gombok kezelése
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Aktív gomb beállítása
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Szűrés végrehajtása
      const filterValue = this.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Sima görgetés navigációhoz
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    });
  });

  // Hero gomb sima görgetése
  document
    .querySelector(".hero-content .btn")
    .addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    });
});
