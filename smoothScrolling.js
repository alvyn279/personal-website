
//JQuery that takes care of the smooth scrolling once the any link with tag a is clicked on the website
//link (#XXXX) must be inserted under the href attribute
// Used to be $(document).ready(function(){})
$(window).ready(function(){

  if ($("#information").text().length == 0){
    get_inner();  
  }
  // Add smooth scrolling to all links with tag a
  $("a").on('click', function(event) {
    //will be using the hash in order to scroll with animation until the top of thediv with id #XXXXX

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function get_inner(){
  
  $.ajax({
      method: 'POST',
      url: 'body.html',
      dataType: 'html',
      success : function(html_div){
        $('#information').html(html_div);
        // $('#information').load(function(){
        //     //hide loader gif
        // }); 
      }
   });
}

// change style of navbar as going through different sections of the website
window.onscroll = function() {makeNavVisible()};
function makeNavVisible() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { //after passing 100px in terms of scroll
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
}


// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}