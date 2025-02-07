    // Display preloader for 3 seconds after page load
    window.addEventListener("load", function () {
      setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
      }, 3000); // Preloader will disappear after 3 seconds
    });
    
    // Ensure the preloader stays for 3 seconds even if the page is loaded earlier
    setTimeout(() => {
      document.getElementById("preloader").classList.add("hidden");
    }, 3000);

// let slideIndex = 1;
// let n=5;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
