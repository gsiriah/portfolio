document.addEventListener("DOMContentLoaded", function() {
  const professionSpan = document.querySelector('.additional-info');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const professionOptions = ["Web Development Enthusiast", "B.Tech Student"];
  let professionIndex = 0;


  function toggleProfession() {
    professionSpan.innerHTML = '<button class="button-style">' + professionOptions[professionIndex] + '</button>';
    professionIndex = (professionIndex + 1) % professionOptions.length;
  }

  
  setInterval(toggleProfession, 2000);

  
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});
