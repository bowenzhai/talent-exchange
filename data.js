// DataItem constructor
function DataItem (id,category,title,description,providerID,point,rating){
	this.id = id;
	this.category = category;
	this.title = title;
	this.description = description;
	this.providerID = providerID;
	this.point = point;
	this.rating = rating;
}

// provider constructor
function Provider(id, name, rating, intro, imgURL){
	this.id = id;
	this.name = name;
	this.rating = rating;
	this.intro = intro;
	this.imgURL = imgURL;
}

// list of providers, add more fields / data if you want, added field should be added to ctor as well
var providers = [
new Provider(0,"Raymond Thompson", 8, "Hello, I'm Raymond", "heart.png"),
new Provider (1,"Keith Long", 8, "Hello, I'm Keith", "heart.png"),
new Provider (2,"Kathryn Green", 8, "Hello, I'm Kath", "heart.png"),
new Provider(3, "John Simmons", 7, "I teach French", "heart.png")
];

// list of data, add more fields if you want
var data = [
new DataItem(0,"sports","skating","Come and learn some awesome skating skills from Raymond!", 0,50, 8),
new DataItem(1, "arts", "comic drawing", "Interested in drawing some comics? Learn today!",1, 20,9),
new DataItem(2, "life skills", "fishing","Feed yourself with some fresh fish. Extra fees apply for fishing equipment", 2, 40,8),
new DataItem(3, "life skills", "gardening","Flowers can light up your day!" , 2, 40,7),
new DataItem(4, "sports", "swimming","Secure your life against floods", 0, 20,5),
new DataItem(5, "language", "French","Classic French, fancy to know", 3, 80,6)
];


// return value maybe undefined if the id is not valid
// given a providerID, return the provider object
function findProviderByID(id){
	var result = providers.find(function(prov){return prov.id == id;});
	return result;
}

$(document).ready(function(){
	// template string
  var template = "<div class='course-wrapper'> <img src= '<%= findProviderByID(targetObj.providerID).imgURL %>' width='50px' height='50px'/> <h3><%= targetObj.title %> </h3> <div class='info-wrapper'> <p> Provider Name: <b><%= findProviderByID(targetObj.providerID).name %></b> </p> <p>Rating: <b><%= targetObj.rating %> / 10</b></p> <p>Points Per Session: <b><%= targetObj.point %></b> </p> <button type='button'>Contact Provider</button> <button type='button'>Request Course</button> </div>";
  data.forEach(function(item, index) // data is an array of DataItem
  {
  	var tmp = $(_.template(template,{targetObj: item})); // create a new element, plug in data of each "item"
  	tmp.appendTo("body"); // or any other div you want, appendTo(#divID), the div will be appended to the end
  });
});