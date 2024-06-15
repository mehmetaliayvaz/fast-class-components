import "./style.css";

// Document loaded
document.addEventListener("DOMContentLoaded", () => {

  // Accordion
  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
      const accordion = button.parentElement;
      const accordionGroup = accordion.parentElement;
      const content = button.nextElementSibling;

      // If accordion group exists
      if (accordionGroup.classList.contains("accordion-group")) {
        const isActive = accordion.classList.contains("active");

        // Deactivate all accordions
        accordionGroup.querySelectorAll(".accordion").forEach((acc) => {
          acc.classList.remove("active");
          acc.querySelector(".accordion-content").style.maxHeight = null;
        });

        // Activate clicked accordion if it was not active
        if (!isActive) {
          accordion.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
      // If no accordion group
      else {
        accordion.classList.toggle("active");
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
      }
    });
  });

  // Modal
  document.querySelectorAll(".modal-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.nextElementSibling;
      modal.style.display = "flex";
    });
  });

  document.querySelectorAll(".modal-mask, .modal-content-close").forEach((element) => {
    element.addEventListener("click", () => {
      element.closest(".modal").style.display = "none";
    });
  });

  // dropdown
  document.querySelectorAll(".dropdown-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const dropdown = button.nextElementSibling;
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
  });

  // dropdownın dışına tıklanırsa kapat
  document.addEventListener("click", (event) => {
    if (!event.target.matches(".dropdown-btn")) {
      document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
        dropdown.style.display = "none";
      });
    }
  });

});