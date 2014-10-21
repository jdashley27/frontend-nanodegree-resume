
var work = {
	jobs : [{
			"workStart"   : "December 2012",
			"employer"    : "onXmaps",
			"title"       : "Front End Developer",
			"workDates"   : "December 2012 to Current",
			"location"    : "Missoula, Montana",
			"description" : "Worked as a front end developer"
		},
		{
			"workStart"   : "May 2012",
			"employer"    : "HT Group",
			"title"       : "Back End Developer",
			"workDates"   : "May 2012 to September 2012",
			"location"    : "Hamilton, Montana",
			"description" : "Created MVC framework from scratch"
		},
		{
			"workStart"   : "July 2011",
			"employer"    : "Self Employed",
			"title"       : "Freelance Web Designer",
			"workDates"   : "July 2011 to Current",
			"location"    : "Hamilton, Montana",
			"description" : "Create and maintain websites for clients"
		}
	]
};

// Convert this into a function
for(job in work.jobs) {
	// Need to loop through and update all of the values within the array
	console.log(work.jobs[job].employer);

	var formattedworkStart       = HTMLworkStart.replace("%data%", work.jobs[job].workStart);
		formattedworkEmployer    = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
		formattedworkTitle       = HTMLworkTitle.replace("%data%", work.jobs[job].title),
		formattedworkDates       = HTMLworkDates.replace("%data%", work.jobs[job].workDates),
		formattedworkLocation    = HTMLworkLocation.replace("%data%", work.jobs[job].location),
	 	formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


	$("#workExperience").append(formattedworkStart)
						.append(formattedworkEmployer)
						.append(formattedworkTitle)
						.append(formattedworkDates)
						.append(formattedworkLocation)
						.append(formattedworkDescription);

}

var projects = [{
	"title" : "Hunting GPS Maps",
	"location" : "Missoula, Montana",
	"description" : "Lorem ipsum dolores",
	"images" : [{
			"url" : ""
		},
		{
			"url" : ""
		},
		{
			"url" : ""	
	}]
}];

var bio = {
	"name" : "Justin Ashley",
	"role" : "Web Developer",
	"contacts" : {
		"generic" : "ice_2_you@yahoo.com",
		"mobile"  : "406.241.4562",
		"email"   : "jdashley27@gmail.com",
		"twitter" : "jdashley27@twitter.com",
		"github"  : "jdashley27@github.com",
		"blog"    : "N/A",
		"location" : "Missoula, Montana"
	},
	"bioPic" : "images/fry.jpg",
	"welcomeMsg" : "Welcome!"
};

var formattedheaderName = HTMLheaderName.replace("%data%", bio.name);
 formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role),
 formattedcontactGeneric = HTMLcontactGeneric.replace("%contact%", "Contact").replace("%data%", bio.contacts.generic),
 formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
 formattedemail = HTMLemail.replace("%data%", bio.contacts.email),
 formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
 formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github),
 formattedblog = HTMLblog.replace("%data%", bio.contacts.blog),
 formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location),
 formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic),
 formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);


/* TODO: Wrap in a function() */
$("#header").append(formattedheaderName)
			.append(formattedheaderRole)
			.append(formattedcontactGeneric)
			.append(formattedmobile)
			.append(formattedemail)
			.append(formattedtwitter)
			.append(formattedgithub)
			.append(formattedblog)
			.append(formattedlocation)
			.append(formattedbioPic)
			.append(formattedWelcomeMsg);


// Don't forget Udacity!!!
var education = {
	"start" : "May 2010",
	"name" : "Sessions College for Professional Design",
	"location" : "Tempe Arizona",
	"degree"   : "Associates Degree in Occupational Studies of Web Design",
	"major"   : "N/A",
	"datesAttended" : "May 2010 to May 2012",
	"url" : "http://www.sessions.edu/",
	"onlineCourses" : [{
			"title" : "HTML",
			"school" : "Code School",
			"datesAttended" : "Jan 2013 to Current",
			"url"    : "https://www.codeschool.com/"
	}]
};

var formattedschoolStart = HTMLschoolStart.replace("%data%", education.start);
var formattedschoolName = HTMLschoolName.replace("%data%", education.name);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.degree);
var formattedschoolDates = HTMLschoolDates.replace("%data%", education.datesAttended);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.location);
var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.major);

$("#education").append(formattedschoolStart)
			   .append(formattedschoolName)
			   .append(formattedschoolDegree)
			   .append(formattedschoolDates)
			   .append(formattedschoolLocation)
			   .append(formattedschoolMajor);

$("#mapDiv").append(googleMap);

initializeMap();