document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const mobileMenu = document.getElementById("mobileMenu");

  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    closeIcon.style.display = "none";
  });
});
const discount =document.getElementById("discount")
const del=document.getElementById("delete")
del.addEventListener("click",function(){
    discount.style.display="none"
})
const imageSlide = document.getElementById("slider");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

leftBtn.addEventListener("click", () => {
  imageSlide.scrollBy({
    left: -320, // scroll one image left (300px + gap)
    behavior: "smooth"
  });
});

rightBtn.addEventListener("click", () => {
  imageSlide.scrollBy({
    left: 320, // scroll one image right
    behavior: "smooth"
  });
});
 // Get all heart buttons
  const hearts = document.querySelectorAll(".heart");

  hearts.forEach(function(heart) {
    heart.addEventListener("click", function () {
      heart.classList.toggle("active"); // toggles red color
    });
  });
document.querySelectorAll('a[href="#newarrival"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetSection = document.querySelector('#newarrivalSection');

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });

      // Optional: close mobile menu if using checkbox toggle
      const menuToggle = document.getElementById('menu-toggle');
      if (menuToggle) {
        menuToggle.checked = false;
      }
    }
  });
});
 
  document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });

      // Optional: close the mobile menu after clicking (if needed)
      document.getElementById('menu-toggle').checked = false;
    }
  });
});
 