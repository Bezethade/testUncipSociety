window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  const homeSection = document.getElementById("home");
  const aboutSection = document.getElementById("about");
  const gallerySection = document.getElementById("gallery");
  const teamSection = document.getElementById("team");
  const contactSection = document.getElementById("contact");

  const homeTop = homeSection.offsetTop;
  const aboutTop = aboutSection.offsetTop;
  const galleryTop = gallerySection.offsetTop;
  const teamTop = teamSection.offsetTop;
  const contactTop = contactSection.offsetTop;

  if (scrollPosition >= homeTop && scrollPosition < aboutTop) {
    setActive("home");
  } else if (scrollPosition >= aboutTop && scrollPosition < galleryTop) {
    setActive("about");
  } else if (scrollPosition >= galleryTop && scrollPosition < teamTop) {
    setActive("gallery");
  } else if (scrollPosition >= teamTop && scrollPosition < contactTop) {
    setActive("team");
  } else if (scrollPosition >= contactTop) {
    setActive("contact");
  }
});

function setActive(clickedLink) {
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navbarLinks.forEach((link) => link.classList.remove("active"));

  const clickedElement = document.querySelector('.navbar-nav .nav-item a[href="#' + clickedLink + '"]');
  clickedElement.classList.add("active");
}

new Swiper(".testimonials-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});
