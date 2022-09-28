export function doSomething() {
  console.log("Put some code in here!");
}

export function stickySetup() {

  window.onscroll = function() {myFunction()};

  var header = document.getElementById("main-menu-container");

  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    }
    else {
      header.classList.remove("sticky");
    }
  }
}
