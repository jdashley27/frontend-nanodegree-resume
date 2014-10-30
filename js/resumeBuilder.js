//inName("justin ashley");

// Initialize all base settings
//$("#workExperience").append(HTMLworkStart);
//$("#education").append(HTMLschoolStart);
//$("#projects").append(HTMLprojectStart);
//$("#mapDiv").append(googleMap);


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
		"location" : "Missoula, Montana"
	},
	"skills" : ["LAMP Stack", "Web Development", "Adobe Creative Suite", "CMS (Magento/Wordpress)", "E-Commerce", "Project Management"],
	"bioPic" : "images/justin.png",
	"welcomeMsg" : "Welcome to Justin\'s Resum&eacute!",

	appendBio : function() {
		var formattedheaderName = HTMLheaderName.replace("%data%", bio.name);
		 	formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role),
		 	formattedcontactGeneric = HTMLcontactGeneric.replace("%contact%", "Contact").replace("%data%", bio.contacts.generic),
			formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
			formattedemail = HTMLemail.replace("%data%", bio.contacts.email),
			formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
			formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github),
			formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location),
			formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic),
			formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

		$("#topContacts").append(formattedcontactGeneric);

		// Save time by appending the same data to both divs at once
		$("#topContacts, #footerContacts").append(formattedmobile)
										.append(formattedemail)
										.append(formattedtwitter)
										.append(formattedgithub)
										.append(formattedlocation);

		$("#header").append(formattedbioPic)
					.prepend(formattedheaderRole)
					.prepend(formattedheaderName)
					.append(formattedWelcomeMsg)
					.append(HTMLskillsStart);

		for(skill in bio.skills) {

			var newSkill = HTMLskills.replace("%data%", bio.skills[skill]);

			$("#skills").append(newSkill);
		} // end for();
	}, // end appendBio();

	appendMap : function() {
		$("#mapDiv").append(googleMap);
		initializeMap();
	},

	scroll : function() {
		$(".navigation a").on("click", function(e) {
			e.preventDefault();
				
			// acquire the target location based upon the data-target attribute, and then calculate it's offset
			var location = $(this).attr("data-target"),
				navHeight = $("header").height(),
				offset = $( "#" + location ).offset();

			offset.top -= navHeight;
			
			// Animate page to the desired page section
			$( "body, html" ).animate({
				"scrollTop" : offset.top
			}, 800 );
		});
	} // end scroll();
}
/***** END BIO DEFINITION SECTION *****/

/***** BEGIN EDUCATION DEFINITION SECTION *****/
var education = {
	schools : [{
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
	
	onlineCourses : [{
			"title" : "HTML",
			"school" : "Code School",
			"datesAttended" : "Jan 2013 to Current",
			"url"    : "https://www.codeschool.com/"
	}],

	appendEducation : function() {

		$("#education").append(HTMLschoolStart);

		for( school in education.schools) {

			var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name),
				schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree),
				schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended),
				schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location),
				schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

			// Now add the information to the DOM
			$(".education-entry").append(schoolName)
				     .append(schoolDegree)
				     .append(schoolDates)
				     .append(schoolLocation)
				     .append(schoolMajor);	
		} // end for()


	} // end appendSchoolsToDOM();

};

/****** END EDUCATION DEFINITION SECTION *****/


/***** PROJECT DEFINITION SECTION ******/
var projects = {
		projectsList : [{
			"title" : "Hunting GPS Maps",
			"dates" : "December 2012 to Current",
			"description" : "I have been working for this company for close to two years, and am the main developer for the Magento system. Currently, I am in the midst of converting this site " +
			                "into a responsive theme.",
			"images" : [{
					"url" : "images/hunt-home.jpg"
			}, 
			{
					"url" : "images/plat-coverage-map.jpg"
			},
			{
					"url" : "images/pick-your-state.jpg"
			}]
		}, 
		{
			"title" : "onXmaps",
			"dates" : "December 2012 to Current",
			"description" : "As with the previous project, I've been working for this company for two years, and maintain the umbrella site, onXmaps. I will be converting this into a responsive " +
							"redesign after the vertical, Huntinggpsmaps.com, has been converted.",
			"images" : [{
					"url" : "images/onxmaps.jpg"
			},
			{
					"url" : "images/onxmaps2.jpg"
			},
			{
					"url" : "images/onxmaps3.jpg"
			}]
		},
		{
			"title" : "Freight Monster",
			"dates" : "May 2012 to September 2012",
			"description" : "For this project, I worked with a team of developers to build a custom MVC application for a truck brokerage.",
			"images" : [{
					"url" : "images/freightmonster.jpg"
			}, 
			{
					"url" : "images/freightmonster2.jpg"
			},
			{
					"url" : "images/freightmonster3.jpg"
			},
			{
					"url" : "images/freightmonster4.jpg"
			}]
		}],

		appendProjects : function(projects) {

			$("#projects").append(HTMLprojectStart);

			for(project in projects) {

				var projectTitle = HTMLprojectTitle.replace("%data%", projects[project].title),
				 	projectDates = HTMLprojectDates.replace("%data%", projects[project].dates),
					projectDescription = HTMLprojectDescription.replace("%data%", projects[project].description);

					$(".project-entry").append(projectTitle)
								.append(projectDates)
								.append(projectDescription);

					for(image in projects[project].images) {
						var projectImage = HTMLprojectImage.replace("%data%", projects[project].images[image].url);

						$(".project-entry").append(projectImage);
					} 
			}
		} // end appendProjects();
}
/***** END PROJECT DEFINITION SECTION *****/

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
	],

	appendJobs : function() {
		$("#workExperience").append(HTMLworkStart);
		
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

	}
};
/***** END WORK DEFINITION SECTION *****/


/***** INITIALIZE PAGE FUNCTIONALITY *****/
work.appendJobs();
bio.appendBio();
bio.appendMap();
bio.scroll();
projects.appendProjects(projects.projectsList);
education.appendEducation();