(function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("mobileOverlay");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navSearch = document.getElementById("navSearch");
  const navLinks = Array.from(document.querySelectorAll(".group-links a"));
  const groupButtons = Array.from(document.querySelectorAll(".group-btn"));
  const sections = Array.from(document.querySelectorAll(".section"));
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function openMobileSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  }

  function closeMobileSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  }

  mobileMenuBtn?.addEventListener("click", openMobileSidebar);
  overlay?.addEventListener("click", closeMobileSidebar);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1024) closeMobileSidebar();
    });
  });

  groupButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const links = btn.nextElementSibling;
      const isOpen = links.classList.contains("open");
      links.classList.toggle("open", !isOpen);
      btn.classList.toggle("active", !isOpen);
      const icon = btn.querySelector("span");
      if (icon) icon.textContent = isOpen ? "▸" : "▾";
    });
  });

  navSearch?.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    navLinks.forEach((link) => {
      const text = link.textContent.toLowerCase();
      link.style.display = text.includes(q) ? "block" : "none";
    });
  });

  function setCurrentLink(id) {
    navLinks.forEach((a) => {
      const href = a.getAttribute("href");
      a.classList.toggle("current", href === `#${id}`);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentLink(entry.target.id);
        }
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: 0.1 }
  );

  sections.forEach((s) => observer.observe(s));
})();
