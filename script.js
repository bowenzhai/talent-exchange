$(document).ready(function(){
  $('.banner').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 5000
  });
});

var loginBtn = document.getElementsByTagName("nav")[0].children[3];
var loginWindow =  document.getElementById("login_Window");3
var bg = document.getElementsByClassName("transparent-bg")[0];
loginBtn.onclick = function() {
	/*loginWindow.style.display = "block";
	loginWindow.style.opacity = "1";*/
	//$('#login_Window').animate({opacity: 1},100);
	bg.style.display = "block";
	bg.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	bg.style.opacity = "1";
}