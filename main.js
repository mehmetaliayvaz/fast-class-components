import "./style.css";

window.addEventListener("load", function () {
  // Tüm accordion butonlarını seçin
  var accordionButtons = document.querySelectorAll(".accordion-button");

  // Her bir accordion butonuna tıklandığında çalışacak bir fonksiyon tanımlayın
  function toggleAccordion() {
    var accordion = this.parentElement;
    // Seçilen accordionun içeriği seçiliyor
    var accordionContent = this.nextElementSibling;

    accordion.classList.toggle("active");
    // Seçilen accordionun içeriğine 'active' class'ı ekleniyor
    accordionContent.classList.toggle("active");

    // Diğer tüm accordionların içerikleri kapatılıyor
    if (this.parentElement.parentElement.classList.contains("accordions")) {
      var accordions =
        this.parentElement.parentElement.querySelectorAll(".accordion");
      accordions.forEach(function (item) {
        if (item !== accordion) {
          item.classList.remove("active");
        }
      });
    }
  }

  // Her bir accordion butonuna tıklandığında toggleAccordion fonksiyonu çağırılıyor
  accordionButtons.forEach(function (accordionButton) {
    accordionButton.addEventListener("click", toggleAccordion);
  });
});
