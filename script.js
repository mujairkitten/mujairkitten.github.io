function a() {
    window.open("/");
  }
  function b() {
    window.open("/");
  }
  function c() {
    window.location.href = "/";
  }
  
  // Fungsi untuk toggle responsive navbar (jika diperlukan)
  function toggleNav() {
    var nav = document.getElementById("myFloatingNav");
    if (nav.className === "floating-nav") {
      nav.className += " responsive";
    } else {
      nav.className = "floating-nav";
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('main-container');
  
  // When the page loads, add the slide-in class to animate the container upward into view.
  // A slight delay ensures the transition is visible.
  setTimeout(() => {
    container.classList.add('slide-in');
  }, 100);
  
  // Attach click event listeners to links with the "transition-link" class.
  // When one is clicked, the container will slide down before navigating away.
  const transitionLinks = document.querySelectorAll('a.transition-link');
  transitionLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent immediate navigation
      
      // Start the exit animation (slide down)
      container.classList.remove('slide-in');
      container.classList.add('slide-out');
      
      // Wait for the animation to finish before navigating to the new page.
      setTimeout(() => {
        window.location.href = link.href;
      }, 450); // Match this delay to your CSS transition duration
    });
  });
});

function linkedin(){
  window.open("https://www.linkedin.com/in/sammy-anders-soesanto/");
}
function github(){
  window.open("https://github.com/mujairkitten");
}