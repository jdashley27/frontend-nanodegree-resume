
/*
$("#header").append(formattedName).append(formattedRole);
$("#main").append(bio.name).append(bio.role).append(bio.contactInfo);
$("#topContacts").append(formattedMobile)
	.append(formattedEmail)
	.append(formattedGithub)
	.append(formattedLocation);
*/
inName("justin ashley");

// Initialize all base settings
$("#workExperience").append(HTMLworkStart);
$("#education").append(HTMLschoolStart);
$("#projects").append(HTMLprojectStart);



/***** WORK DEFINITION SECTION *****/

var work = {
	jobs : [{
			"employer"    : "onXmaps",
			"title"       : "Front End Developer",
			"workDates"   : "December 2012 to Current",
			"location"    : "Missoula, Montana",
			"description" : "My primary responsibities are: maintaining and extending the company's Magento e-commerce site, maintaining and building upon the umbrella site (onXmaps), " +
							 "mentoring a Jr. Front End Developer, delegating and managing projects with a remote team of developers, working with in-house software engineers for the " +
							 "implementation of new applications, working with designers for web page layouts and dealer assets, creating API's for external marketing sites, " +
							 "converting main e-commerce site into responsive framework, search engine optimization, desigining landing pages for campaigns " + 
							 "and managing database connections between online purchases of apps to app product management for the iOS and Android." 
							 
		},
		{
			"employer"    : "HT Group",
			"title"       : "Back End Developer",
			"workDates"   : "May 2012 to September 2012",
			"location"    : "Hamilton, Montana",
			"description" : "Worked with a team of developers to build a custom MVC (using a LAMP stack) application for a local truck brokerage company. The application utilized multiple " +
							"views so brokers can manage the bidding interaction between drivers and shippers. The application made use of Google Earth Maps to map out truck " +
							"routes for picking up shipments, as-well-as creating estimates for the trip cost"
		},
		{
			"employer"    : "Self Employed",
			"title"       : "Freelance Web Designer",
			"workDates"   : "July 2011 to Current",
			"location"    : "Hamilton, Montana",
			"description" : "As a freelancer, I work with various companies or individuals who need custom built websites to either market their services, or provide information for specific " +
							"purposes. This includes utilizing CMS systems, such as Wordpress or Magento, or building custom solutions for each client's specific needs."
		}
	]
};

/***** END WORK DEFINITION SECTION *****/


// Convert this into a function
for(job in work.jobs) {
	// Need to loop through and update all of the values within the array

	var	formattedworkEmployer    = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
		formattedworkTitle       = HTMLworkTitle.replace("%data%", work.jobs[job].title),
		formattedworkDates       = HTMLworkDates.replace("%data%", work.jobs[job].workDates),
		formattedworkLocation    = HTMLworkLocation.replace("%data%", work.jobs[job].location),
	 	formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry").append(formattedworkEmployer)
					.append(formattedworkTitle)
					.append(formattedworkDates)
					.append(formattedworkLocation)
					.append(formattedworkDescription);

}


/***** PROJECT DEFINITION SECTION ******/

var projects = [{
	"title" : "Hunting GPS Maps",
	"dates" : "December 2012 to Current",
	"description" : "Lorem ipsum dolores",
	"images" : {
			"url" : "images/hunt-home.jpg"
	}
}, 
{
	"title" : "hello"
}];

/***** END PROJECT DEFINITION SECTION *****/
var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects[0].title);
var formattedprojectDates = HTMLprojectDates.replace("%data%", projects[0].dates);
var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects[0].description);
var formattedprojectImage = HTMLprojectImage.replace("%data%", projects[0].images.url);

$(".project-entry").append(formattedprojectTitle)
					.append(formattedprojectDates)
					.append(formattedprojectDescription)
					.append(formattedprojectImage);

/***** BIO DEFINITION SECTION *****/
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
	"skills" : ["LAMP Stack", "Web Development", "Adobe Creative Suite", "CMS (Magento/Wordpress)", "E-Commerce", "Project Management", "SEO"],
	"bioPic" : "images/justin.jpg",
	"welcomeMsg" : "Welcome to Justin\'s Resum&eacute!"
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

/***** END BIO DEFINITION SECTION *****/

/* TODO: Wrap in a function() */


$("#topContacts").append(formattedcontactGeneric);

// Save time by appending the same data to both divs at once
$("#topContacts, #footerContacts").append(formattedmobile)
								.append(formattedemail)
								.append(formattedtwitter)
								.append(formattedgithub)
								.append(formattedblog)
								.append(formattedlocation);

$("#header").append(formattedbioPic)
			.prepend(formattedheaderRole)
			.prepend(formattedheaderName)
			.append(formattedWelcomeMsg)
			.append(HTMLskillsStart);

for(skill in bio.skills) {

	var newSkill = HTMLskills.replace("%data%", bio.skills[skill]);

	$("#skills").append(newSkill);
}

// Append Connections to footer 


/***** BEGIN EDUCATION DEFINITION SECTION *****/

// Don't forget Udacity!!!
var education = [{
	"schools" : [{
		"name" : "Sessions College for Professional Design",
		"location" : "Tempe, Arizona",
		"degree"   : "Associates Degree in Occupational Studies of Web Design",
		"major"   : "N/A",
		"datesAttended" : "May 2010 to May 2012",
		"url" : "http://www.sessions.edu/"
	},
	{
		"name" : "Udacity",
		"location" : "Mountain View, California",
		"degree"   : "Nano Degree in Front-End Development",
		"major"    : "N/A",
		"datesAttended" : "October 2014 to Current",
		"url" : "https://www.udacity.com/"
	}],
	"onlineCourses" : [{
			"title" : "HTML",
			"school" : "Code School",
			"datesAttended" : "Jan 2013 to Current",
			"url"    : "https://www.codeschool.com/"
	}]
}];

// Loop through education and append the data to the DOM
for( index in education ) {
	for( school in education[index].schools) {
		var schoolName = HTMLschoolName.replace("%data%", education[index].schools[school].name),
			schoolDegree = HTMLschoolDegree.replace("%data%", education[index].schools[school].degree),
			schoolDates = HTMLschoolDates.replace("%data%", education[index].schools[school].datesAttended),
			schoolLocation = HTMLschoolLocation.replace("%data%", education[index].schools[school].location),
			schoolMajor = HTMLschoolMajor.replace("%data%", education[index].schools[school].location);

		// Now add the information to the DOM
		appendSchoolsToDOM(schoolName, schoolDegree, schoolDates, schoolLocation, schoolMajor);
	}
}

/****** END EDUCATION DEFINITION SECTION *****/

function appendSchoolsToDOM(schoolName, schoolDegree, schoolDates, schoolLocation, schoolMajor) {
	console.log("Hello");
	$(".education-entry").append(schoolName)
				     .append(schoolDegree)
				     .append(schoolDates)
				     .append(schoolLocation)
				     .append(schoolMajor);
}




$("#mapDiv").append(googleMap);

/***** INITIALIZE FUNCTIONS ON PAGE LOAD *****/
initializeMap();



/***** END INITIALIZE FUNCTIONS ON PAGE LOAD *****/


/***** FUNCTIONS SECTION *****/
function inName(name) {

	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	console.log(name[0] + " " + name[1]);

	return name[0] + " " + name[1];


}

/***** END FUNCTIONS SECTIONS *****/