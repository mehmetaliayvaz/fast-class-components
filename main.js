window.addEventListener("load", function () {
  // Tüm accordion butonlarını seçin
  var accordionButtons = document.querySelectorAll(".accordion-button");

  // Her bir accordion butonuna tıklandığında çalışacak bir fonksiyon tanımlayın
  function toggleAccordion() {
    // Seçilen accordionun içeriği seçiliyor
    var accordionContent = this.nextElementSibling;

    // Seçilen accordionun içeriğine 'active' class'ı ekleniyor
    accordionContent.classList.toggle("active");

    // Diğer tüm accordionların içerikleri kapatılıyor
    if (this.parentElement.parentElement.classList.contains("accordions")) {
      var accordions =
        this.parentElement.parentElement.querySelectorAll(".accordion");
      accordions.forEach(function (accordion) {
        var content = accordion.querySelector(".accordion-content");
        if (content !== accordionContent) {
          content.classList.remove("active");
        }
      });
    }
  }

  // Her bir accordion butonuna tıklandığında toggleAccordion fonksiyonu çağırılıyor
  accordionButtons.forEach(function (accordionButton) {
    accordionButton.addEventListener("click", toggleAccordion);
  });
});
