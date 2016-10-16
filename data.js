// DataItem constructor
function DataItem (id,category,title,description,providerID,point,rating,timestamp){
	this.id = id;
	this.category = category;
	this.title = title;
	this.description = description;
	this.providerID = providerID;
	this.point = point;
	this.rating = rating;
	this.timestamp = timestamp;
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
new Provider(0,"Raymond Thompson", 8, "Hello, I'm Raymond", "./images/man1.jpg"),
new Provider (1,"Keith Long", 8, "Hello, I'm Keith", "./images/man2.jpg"),
new Provider (2,"Kathryn Green", 8, "Hello, I'm Kath", "./images/woman1.jpg"),
new Provider(3, "John Simmons", 7, "I teach French", "./images/man3.jpg"),
new Provider(4, "Jane Doe", 6, "Soccer is life", "./images/woman2.jpg"),
new Provider(5, "Bob Smith", 3, "I like Pianos", "./images/man4.jpg")
];

// list of data, add more fields if you want
var data = [
new DataItem(0,"Sports","Skating","Come and learn some awesome skating skills from Raymond!", 0,50, 8, new Date("October 15, 2016 23:59:12")),
new DataItem(1, "Arts", "Comic drawing", "Interested in drawing some comics? Learn today!",1, 20,9, new Date("October 13, 2016 11:13:24")),
new DataItem(2, "Life skills", "Fishing","Feed yourself with some fresh fish. Extra fees apply for fishing equipment.", 2, 40,8, new Date("October 13, 2016 02:47:08")),
new DataItem(3, "Life skills", "Gardening","Flowers can light up your day!" , 2, 40,7, new Date("October 6, 2016 20:46:39")),
new DataItem(4, "Sports", "Swimming","Secure your life against floods!", 0, 20,5, new Date("October 1, 2016 06:01:25")),
new DataItem(5, "Language", "French","Classic French, fancy to know.", 3, 80,6, new Date("September 29, 2016 17:54:00")),
new DataItem(6, "Sports", "Soccer","I am a long-time soccer enthusiast who played in the Western University Varsity.", 4, 40,6, new Date("September 28, 2016 00:01:59")),
new DataItem(7, "Music", "Piano","I was taught by Beethoven, therefore I am amazing at piano.", 5, 10,3, new Date("September 03, 2016 14:23:33")),
];


// return value maybe undefined if the id is not valid
// given a providerID, return the provider object
function findProviderByID(id){
	var result = providers.find(function(prov){return prov.id == id;});
	return result;
}
