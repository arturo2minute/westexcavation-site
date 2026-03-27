const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  siteNav.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const dotsContainer = carousel.querySelector(".carousel-dots");
  const viewport = carousel.querySelector(".carousel-viewport");

  if (!slides.length) {
    return;
  }

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = index === 0 ? "carousel-dot is-active" : "carousel-dot";
      dot.setAttribute("data-carousel-dot", String(index));
      dot.setAttribute("aria-label", `View project ${index + 1}`);
      dotsContainer.appendChild(dot);
    });
  }

  const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));

  let activeIndex = Math.max(
    0,
    slides.findIndex((slide) => slide.classList.contains("is-active"))
  );

  const renderSlide = () => {
    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.hidden = !isActive;
    });

    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  };

  const moveTo = (nextIndex) => {
    activeIndex = (nextIndex + slides.length) % slides.length;
    renderSlide();
  };

  prevButton?.addEventListener("click", () => moveTo(activeIndex - 1));
  nextButton?.addEventListener("click", () => moveTo(activeIndex + 1));

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => moveTo(index));
  });

  viewport?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveTo(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveTo(activeIndex + 1);
    }
  });

  renderSlide();
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
