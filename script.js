$(document).ready(function(){
  $('.banner').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 5000
  });

  var i;
  for(i = 0; i < 10;i++){
  addResult("Bob Smith", "Music", "Piano","I was taught by Beethoven, therefore I am amazing at piano.");}
  });

function addResult(name,category,subject,desc){
	$(".results-list").append($('\
		<li>\
		<img src="./images/images.jpg">\
		<h3 class="name">'+name+'</h3>\
		<br><p class="category">\
		<b>'+category+' </b>></p>\
		<p class="subject"	>'+subject+'</p><br>\
		<p class="description">'+desc+'</p>\
		<div class="rating">\
		</div><button type="button">Contact</button>\
		<button type="button">Find out more</button>\
		</li>'));
}

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