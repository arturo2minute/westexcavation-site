const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

const assetVersion = "20260327a";

const siteContent = {
  businessName: "West Excavation LLC",
  serviceArea: "Serving Lane, Linn, and Benton County",
  serviceAreaShort: "Lane, Linn, and Benton County",
  license: "Licensed | Bonded | Insured | CCB#249966",
  licenseShort: "CCB#249966",
  phone: {
    label: "(541) 801-5790",
    href: "tel:+15418015790",
  },
  email: {
    label: "Westexcavationor@gmail.com",
    href: "mailto:Westexcavationor@gmail.com",
  },
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/p/West-Excavation-LLC-61556452743096/",
  },
  logo: {
    src: "images/logo.PNG",
    alt: "West Excavation logo",
  },
  navLinks: [
    { href: "#media", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ],
};

// Keep project content centralized so future reordering or additions only happen here.
const carouselContent = {
  projects: [
    {
      layout: "single",
      title: "New driveway with concrete borders",
      chips: ["Completed project", "Access improvement"],
      description:
        "A finished driveway upgrade with clean concrete edging and a stronger, more polished arrival to the property.",
      image: {
        src: "images/new driveway with concrete borders after.jpeg",
        alt: "Finished driveway with concrete borders",
      },
    },
    {
      layout: "compare",
      title: "Driveway extension and rebuild",
      chips: ["Before and after", "Access improvement"],
      description:
        "A side-by-side look at how grading and rebuilding can improve access, shape, and overall function on a working property.",
      before: {
        src: "images/driveway extension rebuild angle 1 before.jpeg",
        alt: "Driveway extension and rebuild before grading",
      },
      after: {
        src: "images/driveway extension rebuild angle 1 after.jpeg",
        alt: "Driveway extension and rebuild after grading",
      },
    },
    {
      layout: "compare",
      title: "Driveway extension and rebuild - second view",
      chips: ["Before and after", "Access improvement"],
      description:
        "A second angle showing how the rebuilt driveway extension created cleaner access and a more usable approach.",
      before: {
        src: "images/driveway extension rebuild angle 2 before.jpeg",
        alt: "Second view of driveway extension before grading",
      },
      after: {
        src: "images/driveway extension rebuild angle 2 after.jpeg",
        alt: "Second view of driveway extension after grading",
      },
    },
    {
      layout: "compare",
      title: "Mobile home demolition after a fire",
      chips: ["Before and after", "Demolition"],
      description:
        "Demolition and cleanup work that cleared a damaged structure and reset the site for whatever comes next.",
      before: {
        src: "images/mobile home demolition before.jpeg",
        alt: "Fire-damaged mobile home before demolition",
      },
      after: {
        src: "images/mobile home demolition after.jpeg",
        alt: "Site after mobile home demolition and cleanup",
      },
    },
    {
      layout: "compare",
      title: "Brush clearing",
      chips: ["Before and after", "Land clearing"],
      description:
        "Before-and-after clearing work that opened the property up, improved visibility, and reclaimed usable space.",
      before: {
        src: "images/brush clearing before.jpeg",
        alt: "Overgrown property before brush clearing",
      },
      after: {
        src: "images/brush clearing after.jpeg",
        alt: "Property after brush clearing",
      },
    },
    {
      layout: "single",
      title: "Shop pad",
      chips: ["Completed project", "Site prep"],
      description:
        "A prepared pad ready for the next phase of construction, with the site shaped for stable and practical use.",
      image: {
        src: "images/shop pad.jpeg",
        alt: "Prepared shop pad on a cleared site",
      },
    },
    {
      layout: "single",
      title: "Retaining wall",
      chips: ["Completed project", "Retaining wall"],
      description:
        "Retaining wall work that adds structure, support, and a more finished look where grade changes need to be managed well.",
      image: {
        src: "images/retaining wall.jpeg",
        alt: "Completed retaining wall project",
      },
    },
    {
      layout: "compare",
      title: "Pool demo",
      chips: ["Before and after", "Demolition"],
      description:
        "Pool demolition and cleanup that removed an outdated feature and left the area ready for a new plan.",
      before: {
        src: "images/pool demo before.jpeg",
        alt: "Pool area before demolition",
      },
      after: {
        src: "images/pool demo after.jpeg",
        alt: "Pool area after demolition and cleanup",
      },
    },
    {
      layout: "compare",
      title: "Driveway retaining wall",
      chips: ["Before and after", "Retaining wall"],
      description:
        "A retaining wall upgrade that strengthens the driveway edge and helps the space function more cleanly over time.",
      before: {
        src: "images/driveway retaining wall before.jpeg",
        alt: "Driveway edge before retaining wall installation",
      },
      after: {
        src: "images/driveway retaining wall after.jpeg",
        alt: "Driveway edge after retaining wall installation",
      },
    },
    {
      layout: "compare",
      title: "New driveway with drainage",
      chips: ["Before and after", "Drainage"],
      description:
        "A driveway improvement focused on both surface access and drainage, helping the property handle water more effectively.",
      before: {
        src: "images/new driveway with drainage before.jpeg",
        alt: "Driveway area before drainage and driveway improvements",
      },
      after: {
        src: "images/new driveway with drainage after.jpeg",
        alt: "Driveway area after drainage and driveway improvements",
      },
    },
    {
      layout: "compare",
      title: "House demo",
      chips: ["Before and after", "Demolition"],
      description:
        "House demolition and site clearing that safely removed the structure and opened the property for its next use.",
      before: {
        src: "images/house demo before.jpeg",
        alt: "House before demolition",
      },
      after: {
        src: "images/house demo after.jpeg",
        alt: "Property after house demolition and cleanup",
      },
    },
  ],
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const renderProjectVisual = (project) => {
  if (project.layout === "compare") {
    return `
      <div class="compare-frame" aria-label="${escapeHtml(project.title)} before and after">
        <figure class="compare-side before-side">
          <img
            class="compare-photo"
            src="${escapeHtml(project.before.src)}"
            alt="${escapeHtml(project.before.alt)}"
            loading="lazy"
          />
          <span>Before</span>
        </figure>
        <figure class="compare-side after-side">
          <img
            class="compare-photo"
            src="${escapeHtml(project.after.src)}"
            alt="${escapeHtml(project.after.alt)}"
            loading="lazy"
          />
          <span>After</span>
        </figure>
      </div>
    `;
  }

  return `
    <div class="media-frame image-frame">
      <img
        class="media-photo"
        src="${escapeHtml(project.image.src)}"
        alt="${escapeHtml(project.image.alt)}"
        loading="lazy"
      />
    </div>
  `;
};

const renderProjectSlide = (project, index) => {
  const chips = project.chips
    .map((chip) => `<span class="project-chip">${escapeHtml(chip)}</span>`)
    .join("");
  const activeClass = index === 0 ? " is-active" : "";
  const hiddenAttribute = index === 0 ? "" : " hidden";

  return `
    <article
      class="project-slide${activeClass}"
      data-carousel-slide
      aria-label="Project ${index + 1}: ${escapeHtml(project.title)}"${hiddenAttribute}
    >
      <div class="project-card">
        <div class="project-visual">
          ${renderProjectVisual(project)}
        </div>
        <div class="project-content">
          <div class="project-meta">${chips}</div>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
        </div>
      </div>
    </article>
  `;
};

const withAssetVersion = (src) => `${src}?v=${assetVersion}`;

const applyTextContent = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const applyLinkContent = (selector, content) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = content.label;
    element.setAttribute("href", content.href);
  });
};

const renderNavLinks = (selector, links) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.innerHTML = links
      .map((link) => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
      .join("");
  });
};

const applyImageSource = (selector, image) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute("src", withAssetVersion(image.src));
    element.setAttribute("alt", image.alt);
  });
};

const applyFaviconSource = (selector, src) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute("href", withAssetVersion(src));
  });
};

applyTextContent("[data-site-license]", siteContent.license);
applyTextContent("[data-site-license-short]", siteContent.licenseShort);
applyTextContent("[data-site-business-name]", siteContent.businessName);
applyTextContent("[data-site-service-area]", siteContent.serviceArea);
applyTextContent("[data-site-service-area-short]", siteContent.serviceAreaShort);

applyLinkContent("[data-site-phone]", siteContent.phone);
applyLinkContent("[data-site-email]", siteContent.email);
applyLinkContent("[data-site-facebook]", siteContent.facebook);

applyImageSource("[data-site-logo]", siteContent.logo);
applyFaviconSource("[data-site-favicon]", siteContent.logo.src);

renderNavLinks("[data-site-nav]", siteContent.navLinks);
renderNavLinks("[data-site-footer-nav]", siteContent.navLinks);

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
  const carouselName = carousel.dataset.carousel;
  const viewport = carousel.querySelector(".carousel-viewport");
  const content = carouselContent[carouselName];

  if (viewport && content?.length) {
    viewport.innerHTML = content.map((project, index) => renderProjectSlide(project, index)).join("");
  }

  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const dotsContainer = carousel.querySelector(".carousel-dots");

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
