var loginBtn = document.getElementsByTagName("nav")[0].children[3];
var loginWindow =  document.getElementById("login_Window");
var bg = document.getElementsByClassName("transparent-bg")[0];

loginBtn.onclick = function(event) {
	bg.style.display = "block";
	bg.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	bg.style.opacity = "1";
	event.preventDefault();
	return false;
};