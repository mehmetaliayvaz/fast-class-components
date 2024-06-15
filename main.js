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

  // <div class="tab">
  //   <button class="tab-btn">Tab 1</button>
  //   <button class="tab-btn">Tab 2</button>
  //   <button class="tab-btn">Tab 3</button>
  //   <div class="tab-content">
  //     <div class="tab-item">
  //       <p>Tab 1 Content</p>
  //     </div>
  //     <div class="tab-item">
  //       <p>Tab 2 Content</p>
  //     </div>
  //     <div class="tab-item">
  //       <p>Tab 3 Content</p>
  //     </div>
  //   </div>
  // </div>

  // Tab componenti: ilk başta ilk tab-item açık olsun. eğer ilk tab-btn hariç diğerlerinden biri active ise başlangıçta onun tab-item'ı açık olsun
  document.querySelectorAll(".tab").forEach((tab) => {
    const tabBtns = tab.querySelectorAll(".tab-btn");
    const tabItems = tab.querySelectorAll(".tab-item");

    tabBtns.forEach((button, index) => {
      button.addEventListener("click", () => {
        tabBtns.forEach((btn) => {
          btn.classList.remove("active");
        });
        button.classList.add("active");

        tabItems.forEach((item) => {
          item.style.display = "none";
        });
        tabItems[index].style.display = "block";
      });
    });

    // ilk tab-item'ı açık yap
    tabItems[0].style.display = "block";
    //eğer hiç active tab-btn yoksa ilk tab-btn ye active class'ını ekle
    const activeBtn = tab.querySelector(".tab-btn.active");
    if (!activeBtn) {
      tabBtns[0].classList.add("active");
    }

    // ilk tab-btn active değilse onun tab-item'ını açık yap
    if (activeBtn) {
      const index = Array.from(tabBtns).indexOf(activeBtn);
      tabItems.forEach((item) => {
        item.style.display = "none";
      });
      tabItems[index].style.display = "block";
    }
  });

});