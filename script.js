// === Fade-In Animation for All Pages ===
document.addEventListener("DOMContentLoaded", () => {
  const fadeBlocks = document.querySelectorAll(".fade-block");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });
  fadeBlocks.forEach(block => observer.observe(block));
});

// === Dynamic Page Titles for SEO ===
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const path = window.location.pathname;

  if (scrollY > 300) {
    if (path.includes("Homepage")) {
      document.title = "SheStrong | Confidence at the Gym";
    } else if (path.includes("about")) {
      document.title = "SheStrong | Our Story";
    } else if (path.includes("services")) {
      document.title = "SheStrong | Our Services";
    } else if (path.includes("enquiry")) {
      document.title = "SheStrong | Enquire Now";
    } else if (path.includes("contact")) {
      document.title = "SheStrong | Stay Connected";
    }
  } else {
    if (path.includes("Homepage")) {
      document.title = "SheStrong Fitness Studio";
    } else if (path.includes("about")) {
      document.title = "About Us - SheStrong";
    } else if (path.includes("services")) {
      document.title = "SheStrong Fitness Studio";
    } else if (path.includes("enquiry")) {
      document.title = "SheStrong Fitness Studio";
    } else if (path.includes("contact")) {
      document.title = "Contact - SheStrong";
    }
  }
});

// === Modal Popup for Homepage Gallery Preview ===
document.addEventListener("DOMContentLoaded", () => {
  const exploreLink = document.getElementById("exploreLink");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");

  if (exploreLink && modal && closeBtn) {
    exploreLink.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});

// === Enquiry Form Validation and AJAX Submission ===
document.addEventListener("DOMContentLoaded", () => {
  const enquiryForm = document.querySelector('form[action="#"]');
  if (window.location.pathname.includes("enquiry") && enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const type = document.getElementById("type");

      let errors = [];

      if (!name.value.trim()) {
        errors.push("Please enter your full name.");
      }

      if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.push("Please enter a valid email address.");
      }

      if (!message.value.trim() || message.value.length < 10) {
        errors.push("Your message must be at least 10 characters long.");
      }

      if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
      }

      // Simulated AJAX submission
      alert(`Thank you for your enquiry about "${type.value}". We'll respond shortly.`);
      enquiryForm.reset();
    });
  }
});

// === Contact Page Newsletter Validation and Email Simulation ===
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector('form[action="#"]');
  if (window.location.pathname.includes("contact") && contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email");

      if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert("Please enter a valid email address to subscribe.");
        return;
      }

      // Simulated email confirmation
      alert(`Subscription successful! Updates will be sent to ${email.value}`);
      contactForm.reset();
    });
  }
});