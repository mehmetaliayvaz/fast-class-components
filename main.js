import "./style.css";

//döküman yüklenince 

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((accordionButton) => {
    accordionButton.addEventListener("click", () => {

      const accordionGroup = accordionButton.parentElement.parentElement;

      // if there is an accordion group
      if (accordionGroup.classList.contains("accordion-group")) {
        // if the clicked accordion button is already active
        if (accordionButton.parentElement.classList.contains("active")) {
          accordionGroup.querySelectorAll(".accordion").forEach((accordion) => {
            accordion.classList.remove("active");

            var content = accordion.querySelector(".accordion-content");
            if (content?.style?.maxHeight) {
              content.style.maxHeight = null;
            }

          });
        }

        // If the clicked accordion button is not active
        else {
          accordionGroup.querySelectorAll(".accordion").forEach((accordion) => {
            accordion.classList.remove("active");

            var content = accordion.querySelector(".accordion-content");
            if (content?.style?.maxHeight) {
              content.style.maxHeight = null;
            }
          });

          accordionButton.parentElement.classList.add("active");

          var panel = accordionButton.nextElementSibling;
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }

      // If there is no accordion group
      else {
        accordionButton.parentElement.classList.toggle("active");

        var panel = accordionButton.nextElementSibling;

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }

    });
  });
});