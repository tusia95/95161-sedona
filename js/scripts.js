    var link = document.querySelector(".hotel-search-ref");
     link.addEventListener("click", function (evt)
     {
       evt.preventDefault();
       var popup = document.querySelector(".search-hotel-form-main");
       popup.classList.toggle('modal-close');
    });
