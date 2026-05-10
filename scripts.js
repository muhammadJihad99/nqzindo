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

// Modal Video
const introVideo = document.getElementById("introVideo");
const introScreen = document.getElementById("introScreen");
const enterBtn = document.getElementById("enterBtn");

// saat video selesai
introVideo.addEventListener("ended", () => {
  introScreen.classList.add("show-btn");
});

// klik tombol masuk website
enterBtn.addEventListener("click", () => {
  introScreen.style.display = "none";
  document.body.style.overflow = "auto";
});

// lock scroll saat intro
document.body.style.overflow = "hidden";

