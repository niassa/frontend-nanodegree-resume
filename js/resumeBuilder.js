/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
	name : "Michelle Kellogg",
	role : "Front-End Web Developer",
	contacts : {
		mobile: "303-555-1212",
		email: "me@me.com",
		github: "http://www.github.com/niassa",
		twitter: "http://www.twitter.com/niassa",
		location: "Parker, Colorado, US"
	},
	welcomeMessage: "Welcome to my Résumé!",
	skills: ["HTML", "CSS", "JS", "Photoshop", "Illustrator", "InDesign"],
	bioPic: "images/me.jpg",
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var myPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var myGit = HTMLgithub.replace("%data%", bio.contacts.github);
		var myTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var myLoc = HTMLlocation.replace("%data%", bio.contacts.location);
		var myMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var mySkills = HTMLskills.replace("%data%", bio.skills);
		var myBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		//myEmail = myEmail.attr("a href", "mailto:me@me.com");
		
		$("#header").append(formattedName);
		$("#header").append(formattedRole);
		$("#topContacts").append(myPhone);
		$("#topContacts").append(myEmail);
		$("#topContacts").append(myGit);
		$("#topContacts").append(myTwit);
		$("#topContacts").append(myLoc);
		$("#header").append(myMsg);
		$("#header").append(myBioPic);
 		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
 			var mySkills = HTMLskills.replace("%data%", bio.skills[i]);
 			$("#header").append(mySkills);
 		}
		//$("#header").append(mySkills);
		$("#footerContacts").append(myPhone);
		$("#footerContacts").append(myEmail);
		$("#footerContacts").append(myGit);
		$("#footerContacts").append(myTwit);
		$("#footerContacts").append(myLoc);
	}
}

var education = {
	schools: [
	{
		name: "Universal Life College",
		location: "Modesto, CA",
		degree: "Masters of Religion",
		majors: ["Religion"],
		dates: "2000-2002",
		url: ""
	},
	{
		name: "University of Northern Colorado",
		location: "Greeley, CO",
		degree: "Bachelors of Music",
		majors: ["Vocal Performance (Opera)"],
		dates: "1995-1999",
		url: "http://www.unco.edu"
	}],
	onlineCourses: [
	{
		title: "Front-End Web Developer",
		school: "Udacity",
		dates: "2017-2018",
		url: "http://www.udacity.com"
	}],
	display: function() {
		$("#education").append(HTMLschoolStart);
		
		for (var i = 0; i < education.schools.length; i++) {
			var formatName = HTMLschoolName.replace("%data%", education.schools[i].name);
			//formatName = formatName.replace("#", education.schools[i].url);
			var formatDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formatDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formatLoc = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formatMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			$(".education-entry:last").append(formatName);
			$(".education-entry:last").append(formatDegree);
			$(".education-entry:last").append(formatDates);
			$(".education-entry:last").append(formatLoc);
			$(".education-entry:last").append(formatMajor);
		};
		
		$("#education").append(HTMLonlineClasses);	
		
		for (var j= 0; j < education.onlineCourses.length; j++) {
			var formatOtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
			var formatOschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
			var formatOdates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
			var formatOurl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formatOtitle);
			$(".education-entry:last").append(formatOschool);
			$(".education-entry:last").append(formatOdates);
			$(".education-entry:last").append(formatOurl);
		};
	}
}

var work = {
	jobs: [
	{
		employer: "AT&T / DIRECTV",
		title: "Senior Instructional Designer",
		location: "Englewood, CO",
		dates: "2010- ",
		description: "Develop instructional materials for field technicians."
	},
	{
		employer: "DISH Network",
		title: "Instructional Designer",
		location: "Englewood, CO",
		dates: "2003-2010",
		description: "Develop instructional materials for retail stores."
	}],
	display: function() {
		$("#workExperience").append(HTMLworkStart);
		for (var i = 0; i < work.jobs.length; i++) {
			var formatEmp = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formatTit = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			$(".work-entry:last").append(formatEmp + formatTit);
			var formatLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			$(".work-entry:last").append(formatLoc);
			var formatDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			$(".work-entry:last").append(formatDates);
			var formatDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(formatDesc);
		};
	}
}

var projects = {
	projects: [
	{
		title: "Animal Trading Cards",
		dates: "1-1-2018",
		description: "Using HTML and CSS, design an animal trading card.",
		images: ["images/trading-card.jpg","images/stitch.jpg"]
	},
	{
		title: "Portfolio Site",
		dates: "1-1-2018",
		description: "Using HTML and CSS, design a Porfolio website.",
		images: ["images/portfolio.jpg","images/portfolio2.jpg"]
	}],
	display: function() {
		for (var i = 0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);
			var formatTit = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			$(".project-entry:last").append(formatTit);
			var formatDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			$(".project-entry:last").append(formatDates);
			var formatDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formatDesc);
			if (projects.projects[i].images.length > 0) {
				for (var j = 0; j < projects.projects[i].images.length; j++) {
					var formatImg = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
					$(".project-entry:last").append(formatImg);
				};
			};
		};
	}
}

bio.display();
work.display();
projects.display();
education.display();

function inName(oldName) {
	var finalName = oldName;
	var names = oldName.split(" ");
	names[1] = names[1].toUpperCase();
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	finalName = names.join(" ");
	return finalName;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);