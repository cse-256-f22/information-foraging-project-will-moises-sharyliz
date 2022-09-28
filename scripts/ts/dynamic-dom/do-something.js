export function doSomething() {
  console.log("Put some code in here!");
}

export function stickySetup() {
  console.log("in sticky")
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("main-menu-container");

  var sticky = header.offsetTop;

  function myFunction() {
    console.log("im doin sumn");
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      console.log("added sticky");
    }
    else {
      header.classList.remove("sticky");
    }
  }
}
