//for the retrun to top button
$(window).on('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
            document.getElementById('myBtn').style.display = 'block';
      else
            document.getElementById('myBtn').style.display = 'none';

})

function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
}




/* Preloader 
 * -------------------------------------------------- */
$WIN = $(window);
$WIN.on('load', function () {

      // will first fade out the loading animation 
      $("#loader").fadeOut("slow", function () {

            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");

      });
});