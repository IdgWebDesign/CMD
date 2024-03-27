(function($, window, document) {
    AOS.init({
      once: true
    });
    
    let opener = document.querySelector(".buttonMenu");
    let menu= document.querySelector(".MenuDesplegado");
    let closer = document.querySelector("#closeDesplegado");


    opener.addEventListener("click", () =>{
        $(menu).addClass("active");
    });

    closer.addEventListener("click", () => {
        $(menu).removeClass("active");
    })

}(window.jQuery, window, document));