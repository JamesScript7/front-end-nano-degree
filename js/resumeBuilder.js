/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // var awesomeThoughts = "I am James and I am AWESOME!"
 // console.log(awesomeThoughts);

 // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 // console.log(funThoughts);

 // $("#main").append(funThoughts);

var skills = ["HTML/CSS", "JS", "Ruby", "Python"];

var bio = {
	"name": "James Kim",
	"age": 29,
	"role": "Full Stack Web Developer",
	"contact": {
		"mobile": "646-732-4220",
		"email": "james.kim7@yahoo.com",
		"github": "JamesScript7",
		"location": "New York"
	},
	"picture": "images/fry.jpg",
	"welcome": "Greetings! I give you the warmest of all welcomes!",
	"skills": skills
};

var work {};

var education {};

work.position = "Production Assistant of Quality Control";
work.employer = "Aguilar Amplification";
work.yearsWorked = 7;
work.city = "New York, New York";

education["School"] = "St. John's University";
education["yearsAttended"] = 5;
education["city"] = "Jamaica, Queens";






var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contact.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);

var email = bio.contact.email;
var formattedEmail = HTMLemail.replace("%data%", email);

var github = bio.contact.github;
var formattedGitHub = HTMLgithub.replace("%data%", github);

var _location = bio.contact.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);

$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGitHub);
$("#header").append(formattedLocation);

var biopic = bio.picture;
var formattedBioPic = HTMLbioPic.replace("%data%", biopic);

$("#header").append(formattedBioPic);

var welcomeMsg = bio.welcome;
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMsg);

$("#header").append(formattedWelcomeMsg);

