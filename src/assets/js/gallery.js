(function () {
  'use-strict';

  function init() {
    (function filter(item) {
      let eles = document.querySelectorAll(item);
      console.log(eles);
      let sections = document.querySelectorAll(".gallery__item.tab-pane");
      console.log(sections);
      eles.forEach(e => {
        e.addEventListener("click", () => {
          //active li click
          eles.forEach(e => {
            e.classList.remove("active");
          });
          e.classList.add("active");
          //show image
          let value = e.getAttribute("data-filter");
          sections.forEach(show => {
            show.style.display = "none";
            if (show.getAttribute("data-category") == value) {
              show.style.display = "block";
            }
          });
        });
      });

    })(".option__item");

  }

  window.addEventListener('load', init);
})();
