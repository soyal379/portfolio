let menulist = document.getElementById("togglelist");
let toggleIcon = document.querySelector(".toggle i");
let isOpen = false;

// Initialize menu on page load
function initMenu() {
  if (window.innerWidth <= 480) {
    menulist.style.maxHeight = "0px";
    isOpen = false;
  } else {
    menulist.style.maxHeight = "none";
    isOpen = true;
  }
}

// Toggle menu function
function togglemenu() {
  if (!isOpen) {
    toggleIcon.style.transform = "rotate(90deg)"
    menulist.style.maxHeight = "300px";
    isOpen = true;
  } else {
    toggleIcon.style.transform = "rotate(0deg)"
    menulist.style.maxHeight = "0px";
    isOpen = false;
  }
}

// Initialize on load
window.addEventListener("load", initMenu);

// Handle window resize
window.addEventListener("resize", function() {
  if (window.innerWidth > 480) {
    menulist.style.maxHeight = "none";
    isOpen = true;
  } else {
    menulist.style.maxHeight = "0px";
    isOpen = false;
  }
});