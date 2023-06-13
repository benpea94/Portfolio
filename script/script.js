
document.addEventListener("DOMContentLoaded", function() {
    
    var checkbox = document.querySelector("input[type=checkbox]");
  
    var body = document.body;
  
    function toggleDarkMode() {
      body.classList.toggle("dark-mode");
    }
  
    checkbox.addEventListener("change", function() {
      toggleDarkMode();
    });
  
    toggleDarkMode();

    var prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    checkbox.checked = !prefersDarkMode;
  });
  