$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

function myFunction(x) {
  /* x.classList.toggle("change");*/
  document.getElementById("disp_sidenav").style.display = "block";
  document.getElementById("left-side-disp").style.display = "block";
}

function hideFunction(x) {
  document.getElementById("disp_sidenav").style.display = "none";
  document.getElementById("left-side-disp").style.display = "none";
}
