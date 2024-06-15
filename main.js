import "./style.css";

// Document loaded
document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const accordion = button.parentElement;
      const accordionGroup = accordion.parentElement;

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
          accordion.querySelector(".accordion-content").style.maxHeight =
            accordion.querySelector(".accordion-content").scrollHeight + "px";
        }
      }
      // If no accordion group
      else {
        accordion.classList.toggle("active");
        const content = button.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
      }
    });
  });
});