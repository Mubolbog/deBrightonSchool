// Hamburger Menu Toggle
const hamburgerBtn = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    hamburgerBtn.setAttribute("aria-expanded", isOpen.toString());
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar")) {
      navLinks.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// Smooth scroll for button
const learnMoreBtn = document.querySelector(".btn");

if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
}

// Simple fade-in animation on scroll
const elements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Initial styles for animation
elements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.6s ease";
});

// Founder Read More Button
const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("more-text");

readMoreBtn.addEventListener("click", () => {
  if (moreText.style.display === "block") {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  } else {
    moreText.style.display = "block";
    readMoreBtn.textContent = "Read Less";
  }
});

const subjectInfo = document.getElementById("subject-info");
const card1 = document.querySelector(".card1");
const card3 = document.querySelector(".card3");
let activeCard = null;

function toggleSubjectInfo(cardType, content) {
  const isSameCard = activeCard === cardType;
  if (!subjectInfo.classList.contains("hidden") && isSameCard) {
    subjectInfo.classList.add("hidden");
    activeCard = null;
    return;
  }

  subjectInfo.innerHTML = content;
  subjectInfo.classList.remove("hidden");
  activeCard = cardType;
  subjectInfo.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

card1.addEventListener("click", () => {
  toggleSubjectInfo(
    "card1",
    `
      <p><strong>NURSERY CLASSES SUBJECTS :</strong></p>
      <p><strong>PRIMARY CLASSES SUBJECTS :</strong></p>
      <p><strong>SECONDARY SCHOOL SUBJECTS :</strong></p>
    `,
  );
});

card3.addEventListener("click", () => {
  toggleSubjectInfo(
    "card3",
    `
      <p><strong>Pre – School Department</strong></p>
      <p><strong>Basic Class Department</strong></p>
      <p><strong>Junior Secondary Department</strong></p>
      <p><strong>Senior Secondary Department</strong></p>
      <p><strong>ICT and Digital Technology Department</strong></p>
      <p><strong>Computer Based Examination Consultation</strong></p>
    `,
  );
});
