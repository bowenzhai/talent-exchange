$(document).ready(function(){
  $('.banner').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 5000
  });



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

$('#applyFilter').submit(function(event){
event.preventDefault();
var template = _.template("<div class='course-wrapper'><img src= '<%= findProviderByID(targetObj.providerID).imgURL %>'/>   <h3 class='name'><%= targetObj.title %> </h3><div class='info-wrapper'><br> <p> Provider Name: <b><%= findProviderByID(targetObj.providerID).name %></b> </p> <p>Rating: <b><%= targetObj.rating %> / 10</b></p> <p>Points Per Session: <b><%= targetObj.point %></b> </p><p>Last updated: <b><%= targetObj.timestamp.getFullYear() + '/' + targetObj.timestamp.getMonth() + '/' +targetObj.timestamp.getDate() %></b> </p><br><br><p>Description: <b><%= targetObj.description %></b></p><br> <button type='button'>Contact Provider</button> <button type='button' ><a href='./soccer-post.html'>Request Course</a></button> </div>");
var form = $('#applyFilter');
$(".results-list").html('');
$("#waitForLoad").removeClass("divHidden");
var searchTxt = form.find("#search").val();
var categories = form.find("#categories").val();
var sort = form.find("#sort").val();
var readyArr = filterSortArr(searchTxt.toLowerCase(), categories, sort, data);

setTimeout(function(){readyArr.forEach(function(item, index) // data is an array of DataItem
  {
  	var tmp = $(template({targetObj: item})); // create a new element, plug in data of each "item"
  	tmp.appendTo(".results-list");

  	 // or any other div you want, appendTo(#divID), the div will be appended to the end
  });
  $("#waitForLoad").addClass("divHidden");
  if($(".results-list").html() === '') {
  	$('<div><p>No result found</p></div>').appendTo(".results-list");
  }
   }, 1000);
return false;
});

});

function login() {
	document.getElementsByClassName('transparent-bg')[0].style.display='none';
	var nav = document.getElementsByTagName('nav')[0];
	nav.removeChild(nav.children[4]);
	nav.removeChild(nav.children[3]);
	var profileLink = document.createElement("a");
	profileLink.href = "profile.html";
	profileLink.innerHTML = "Bowen Zhai";
	nav.appendChild(profileLink);
}
var template = "<div class='course-wrapper'> <img src= '<%= findProviderByID(targetObj.providerID).imgURL %>' width='50px' height='50px'/> <h3><%= targetObj.title %> </h3> <div class='info-wrapper'> <p> Provider Name: <b><%= findProviderByID(targetObj.providerID).name %></b> </p> <p>Rating: <b><%= targetObj.rating %> / 10</b></p> <p>Points Per Session: <b><%= targetObj.point %></b> </p> <button type='button' onclick='function(){window.location = \"soccer-post.html\";}'>Contact Provider</button> <button type='button'>Request Course</button> </div>";

function filterSortArr(searchTxt, categories, sort, arr)
{
	var result = arr.filter(function(elem,idx,targetArr){
		if(elem.description.toLowerCase().indexOf(searchTxt) == -1 && (elem.title.toLowerCase().indexOf(searchTxt) == -1)) return false;
		if(categories != '-' && elem.category.toLowerCase().indexOf(categories.toLowerCase()) == -1) return false;
		return true;
	});
	switch(sort){
		case "Time":
		result.sort(function(obj1,obj2){
			if(obj1.timestamp > obj2.timestamp) return -1;
			if(obj1.timestamp < obj2.timestamp) return 1;
			return 0;
		});

		break;

		case "Rating":

		result.sort(function(obj1,obj2){
			if(obj1.rating > obj2.rating) return -1;
			if(obj1.rating < obj2.rating) return 1;
			return 0;
		});

		break;
	}
	return result;
}


function initMap() {
        var myLatLng = {lat: 43.010052, lng: -81.273648};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('talentsNearBy'), {
          center: myLatLng,
          scrollwheel: false,
          zoom: 15
        });

         var contentString = '<div id="content">'+
      '<p>Your Location</p></div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Your location'
        });

        marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
        var template = "<div class='location'><p><%= findProviderByID(targetObj.providerID).name %>'s offering: <b><%= targetObj.title %></b>. </p><p><%= targetObj.description %></p><button>Learn More</button></div>";
        var templateFunc = _.template(template);
        data.forEach(function(elem, idx, arr){
        	var newMarker = new google.maps.Marker({
        		map: map,
        		position: elem.location,
        		title: 'talent',
        		icon: 'images/rsz_marker.png'
        	});
        	var infowindow = new google.maps.InfoWindow({
    content: templateFunc({targetObj: elem})
  });
        	newMarker.addListener('click',function(){
        		infowindow.open(map, newMarker);
        	});
        });
        }
