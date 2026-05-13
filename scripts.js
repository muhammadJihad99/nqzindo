// ================= NAVBAR =================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// TOGGLE MENU
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // CHANGE ICON
  const icon = menuToggle.querySelector("i");

  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// ACTIVE MENU + AUTO CLOSE MOBILE
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // REMOVE ACTIVE FROM ALL
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    // ADD ACTIVE TO CLICKED MENU
    link.classList.add("active");

    // AUTO CLOSE MOBILE MENU
    if (window.innerWidth <= 900) {
      navMenu.classList.remove("active");

      // RESET ICON
      const icon = menuToggle.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});

// Teams Show
// ================= SHOW MEMBERS =================
const showBtn = document.getElementById("showMembersBtn");
const hiddenCards = document.querySelectorAll(".hidden-card");

let isExpanded = false;

showBtn.addEventListener("click", () => {
  isExpanded = !isExpanded;

  hiddenCards.forEach((card) => {
    if (isExpanded) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });

  // CHANGE BUTTON TEXT
  if (isExpanded) {
    showBtn.innerHTML = `
      <i class="fa-solid fa-eye-slash"></i>
      Hide Members
    `;
  } else {
    showBtn.innerHTML = `
      <i class="fa-solid fa-users"></i>
      Show All Members
    `;
  }
});

// Tournamen
// ================= TOURNAMENT FORM =================
const tournamentForm = document.getElementById("tournamentForm");

tournamentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Tournament Registration Successfully Submitted!");
});

// ================= CONTACT FORM =================
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Your message has been successfully sent!");
});

// dropdown
const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("click", (e) => {
  if (window.innerWidth <= 900) {
    e.preventDefault();
    dropdownMenu.classList.toggle("active");
  }
});

const oldCards = document.querySelectorAll(".oldteam-card");
const lightbox = document.getElementById("oldteamLightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxName = document.getElementById("lightboxName");
const lightboxRole = document.getElementById("lightboxRole");

const closeLightbox = document.getElementById("closeLightbox");
const oldPrevBtn = document.getElementById("oldPrevBtn");
const oldNextBtn = document.getElementById("oldNextBtn");

let oldIndex = 0;

const oldMembers = [];

oldCards.forEach((card, index) => {
  const img = card.querySelector("img").src;
  const name = card.querySelector("h3").innerText;
  const role = card.querySelector("span").innerText;

  oldMembers.push({ img, name, role });

  card.addEventListener("click", () => {
    oldIndex = index;
    openLightbox(oldIndex);
  });
});

function openLightbox(index) {
  lightbox.classList.add("show");
  updateLightbox(index);
  document.body.style.overflow = "hidden";
}

function updateLightbox(index) {
  lightboxImg.src = oldMembers[index].img;
  lightboxName.innerText = oldMembers[index].name;
  lightboxRole.innerText = oldMembers[index].role;
}

// CLOSE
closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
  document.body.style.overflow = "auto";
});

// NEXT
oldNextBtn.addEventListener("click", () => {
  oldIndex++;
  if (oldIndex >= oldMembers.length) oldIndex = 0;
  updateLightbox(oldIndex);
});

// PREV
oldPrevBtn.addEventListener("click", () => {
  oldIndex--;
  if (oldIndex < 0) oldIndex = oldMembers.length - 1;
  updateLightbox(oldIndex);
});

// CLICK OUTSIDE
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});

// KEYBOARD SUPPORT
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("show")) return;

  if (e.key === "Escape") {
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  if (e.key === "ArrowRight") oldNextBtn.click();
  if (e.key === "ArrowLeft") oldPrevBtn.click();
});
