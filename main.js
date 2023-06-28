import "./style.css";

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener("click", () => {

    const accordionGroup = accordionButton.parentElement.parentElement;

    const contentHeight = accordionGroup.querySelector(".accordion-content").offsetHeight;
    console.log(contentHeight)

    if (accordionGroup.classList.contains("accordion-group")) {

      if (accordionButton.parentElement.classList.contains("active")) {
        accordionGroup.querySelectorAll(".accordion").forEach((accordion) => {
          accordion.classList.remove("active");
        });
      }
      else {
        accordionGroup.querySelectorAll(".accordion").forEach((accordion) => {
          accordion.classList.remove("active");
        });

        accordionButton.parentElement.classList.add("active");
      }
    }
    else {
      accordionButton.parentElement.classList.toggle("active");
    }

  });
});