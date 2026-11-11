// Slide-out navigation: links with the "transition-link" class slide the
// panel down before navigating. With reduced motion, navigate immediately.
document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('main-container');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var transitionLinks = document.querySelectorAll('a.transition-link');
  transitionLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (reduceMotion) {
        return; // plain navigation, no animation
      }
      e.preventDefault(); // Prevent immediate navigation

      // Start the exit animation (slide down)
      container.classList.add('slide-out');

      // Wait for the animation to finish before navigating to the new page.
      setTimeout(function () {
        window.location.href = link.href;
      }, 450); // Match this delay to the CSS transition duration
    });
  });
});
