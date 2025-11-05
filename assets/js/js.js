/* ===============================
   MAIN.JS - Mahmoud Taha Portfolio
   =============================== */

// ======= NAVBAR TOGGLE =======
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark"); // تغيير شكل الأيقونة
});

// إغلاق القائمة بعد الضغط على أي رابط في الموبايل
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
  });
});

// ======= DARK MODE TOGGLE =======
const modeBtn = document.querySelector(".btn-mode");
const body = document.body;

// التحقق من الوضع المحفوظ مسبقًا في Local Storage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  modeBtn.classList.replace("fa-sun", "fa-moon");
}

// التبديل بين الوضعين
modeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    modeBtn.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  } else {
    modeBtn.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  }
});

// ======= SCROLL ANIMATIONS =======
const revealElements = document.querySelectorAll(
  ".section, .portfolio-card, .timeline-item, .education-block"
);

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ======= SMOOTH SCROLL FOR NAV LINKS =======
document.querySelectorAll('.nav-links a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// ======= ADD SIMPLE ANIMATION CLASSES =======
const style = document.createElement("style");
style.textContent = `
  .show {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .section,
  .portfolio-card,
  .timeline-item,
  .education-block {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.6s ease-out;
  }
`;
document.head.appendChild(style);


const flipCards = document.querySelectorAll(".flip-card");

function revealFlipCards() {
  const triggerBottom = window.innerHeight * 0.85;

  flipCards.forEach((card) => {
    const top = card.getBoundingClientRect().top;
    if (top < triggerBottom) {
      card.classList.add("show");

      // Animate skill bars
const skillBars = card.querySelectorAll(".skill-bar span");
skillBars.forEach((bar) => {
  const width = bar.getAttribute("data-width"); // قراءة العرض من الـ data-width
  bar.style.width = "0"; // البداية صفر
  setTimeout(() => {
    bar.style.width = width; // ثم تعيين العرض الحقيقي
  }, 200);
});

    }
  });
}

window.addEventListener("scroll", revealFlipCards);
window.addEventListener("load", revealFlipCards);

