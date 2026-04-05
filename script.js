function toggle(header) {
  const card = header.closest(".endpoint");
  card.classList.toggle("open");
}

// Highlight active nav on scroll
const sections = document.querySelectorAll("[id]");
const navItems = document.querySelectorAll(".nav-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((n) => n.classList.remove("active"));
        const match = document.querySelector(
          `.nav-item[href="#${entry.target.id}"]`,
        );
        if (match) match.classList.add("active");
      }
    });
  },
  { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" },
);

sections.forEach((s) => observer.observe(s));
