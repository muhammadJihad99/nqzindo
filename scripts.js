// ================= NAVBAR =================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// safety check
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
}

// ================= NAV LINK ACTIVE + AUTO CLOSE =================
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const isDropdownToggle = link.closest(".dropdown");

    // active state
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    // AUTO CLOSE MOBILE MENU (ONLY IF NOT DROPDOWN)
    if (window.innerWidth <= 900 && !isDropdownToggle?.contains(e.target)) {
      navMenu.classList.remove("active");

      const icon = menuToggle?.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }
  });
});

// ================= DROPDOWN MOBILE =================
document.querySelectorAll(".nav-item.dropdown").forEach((item) => {
  const link = item.querySelector(".nav-link");
  const menu = item.querySelector(".dropdown-menu");

  if (!link || !menu) return;

  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      e.stopPropagation(); // 🔥 penting agar tidak nutup sidebar
      menu.classList.toggle("active");
    }
  });
});

// ================= SHOW MEMBERS =================
const showBtn = document.getElementById("showMembersBtn");
const hiddenCards = document.querySelectorAll(".hidden-card");

let isExpanded = false;

if (showBtn) {
  showBtn.addEventListener("click", () => {
    isExpanded = !isExpanded;

    hiddenCards.forEach((card) => {
      card.classList.toggle("show", isExpanded);
    });

    showBtn.innerHTML = isExpanded
      ? `<i class="fa-solid fa-eye-slash"></i> Hide Members`
      : `<i class="fa-solid fa-users"></i> Show All Members`;
  });
}

// ================= TOURNAMENT FORM =================
const tournamentForm = document.getElementById("tournamentForm");

if (tournamentForm) {
  tournamentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Tournament Registration Successfully Submitted!");
  });
}

// ================= CONTACT FORM =================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been successfully sent!");
  });
}

// ================= OLD TEAMS LIGHTBOX =================
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

if (oldCards.length > 0) {
  oldCards.forEach((card, index) => {
    const img = card.querySelector("img")?.src;
    const name = card.querySelector("h3")?.innerText || "Member";
    const role = card.querySelector("span")?.innerText || "Role";

    oldMembers.push({ img, name, role });

    card.addEventListener("click", () => {
      oldIndex = index;
      openLightbox(oldIndex);
    });
  });
}

function openLightbox(index) {
  if (!lightbox) return;

  lightbox.classList.add("show");
  updateLightbox(index);
  document.body.style.overflow = "hidden";
}

function updateLightbox(index) {
  if (!lightboxImg || !lightboxName || !lightboxRole) return;

  lightboxImg.src = oldMembers[index].img;
  lightboxName.innerText = oldMembers[index].name;
  lightboxRole.innerText = oldMembers[index].role;
}

// CLOSE
if (closeLightbox) {
  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
  });
}

// NEXT
if (oldNextBtn) {
  oldNextBtn.addEventListener("click", () => {
    oldIndex++;
    if (oldIndex >= oldMembers.length) oldIndex = 0;
    updateLightbox(oldIndex);
  });
}

// PREV
if (oldPrevBtn) {
  oldPrevBtn.addEventListener("click", () => {
    oldIndex--;
    if (oldIndex < 0) oldIndex = oldMembers.length - 1;
    updateLightbox(oldIndex);
  });
}

// CLICK OUTSIDE
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });
}

// KEYBOARD SUPPORT
document.addEventListener("keydown", (e) => {
  if (!lightbox?.classList.contains("show")) return;

  if (e.key === "Escape") {
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  if (e.key === "ArrowRight") oldNextBtn?.click();
  if (e.key === "ArrowLeft") oldPrevBtn?.click();
});
