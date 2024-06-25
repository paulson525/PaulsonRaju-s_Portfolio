window.onscroll = function() {scrollFunction()};
     
    function scrollFunction() {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 20) {
        
        document.getElementById("header").style.background = "#101826ff";
      } else {
       
        document.getElementById("header").style.background = "";
      }
}

var typed = new Typed('#desig', {
  strings: ['Full Stack Developer', 'AI Engineer', 'ML Engineer'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});


