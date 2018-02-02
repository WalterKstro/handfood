
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });


  $( "#toogle-menu" ).click(function() {
    $( "#header__nav" ).toggle( "slow" );
  });
