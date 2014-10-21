var data = "%data%";


var formattedName = HTMLheaderName.replace(data, "Justin Ashley");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

// Contact Info
var formattedMobile = HTMLmobile.replace("%data%", "406.241.4562");
var formattedGithub = HTMLgithub.replace("%data%", "jdashley");
var formattedEmail = HTMLemail.replace(data, "jdashley27@gmail.com");
var formattedLocation = HTMLlocation.replace(data, "Missoula, Mt");

var bio = {
	"name" : "Justin Ashley",
	"role" : "Front End Web Developer",
	"contactInfo" : "2200 Great Northern Avenue Apt F34",
	"pictureURL" : "images/jdash.jpg",
	"welcomeMessage" : "Welcome to my Resume!",
	"skills" : [
		"Web Development", "JavaScript", "jQuery"
	]
}

var projects = {};

var work = {
	"position" : "Front End Web Developer",
	"employer" : "onXmaps",
	"years" : "2 years",
	"city" : "Missoula"
};

var education = {
	"education" : [{
		"school" : "Sessions College For Professional Design",
		"years" : "2 years",
		"city" : "Tempe, Arizon"
	}]
}


if(bio.skills.length >= 1) {
}


$("#header").append(formattedName).append(formattedRole);
$("#main").append(bio.name).append(bio.role).append(bio.contactInfo);
$("#topContacts").append(formattedMobile)
	.append(formattedEmail)
	.append(formattedGithub)
	.append(formattedLocation);

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

function inName(name) {

	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	console.log(name[0] + " " + name[1]);

	return name[0] + " " + name[1];


}

inName("justin ashley");



projects.display = function() {
}

$("#mapDiv").append(googleMap);
