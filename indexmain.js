var scrollToTopButtonn = document.getElementById("scrollToTopBtnn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunctionn();
};

function scrollFunctionn() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    scrollToTopButtonn.style.display = "block";
  } else {
    scrollToTopButtonn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTopp() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

function reloadSubmit(){
  window.location.reload();
  setTimeout(() => {
  }, 200);
}
