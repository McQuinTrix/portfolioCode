var myProjects = [
  {
    "proName": "Contact List Application",
    "proDesc": "A small App, which lets you add new contacts as name, email and phone number. You can also delete a certain contact and edit a certain contact. The server is designed with the help of Express.js with the magic of Node.js. The CSS used in the design of website is BootStrap CSS. The database used is MongoDB and the frameworks used for displaying the data is Angular.js. A fully MEAN stack application with CRUD functionalities of MongoDB.",
    "proLink": "http://git.io/veK2O",
    "proTech": ["MongoDB", "Node.js", "Angular.js", "Express.js", " BootStrap", " HTML5"]
  },
  {
    "proName": "Book Store Application",
    "proDesc": "A book store website, where people can people can buy books from given list of books, add to their shopping cart and register your account. The website's front end was made with HTML/CSS. The validation of the user registration is done with JavaScript. The backend data is handled using PHP with Oracle database.",
    "proLink": "",
    "proTech": ["HTML5/CSS3", " JavaScript", " jQuery", " PHP", " Oracle SQL"]
  },
  {
    "proName": "Image Upload Node.js Web Application",
    "proDesc": "A browser based fully Node.js web application, where a user can see a welcome page when requesting http://domain/start which would display a file upload form. By choosing an image file to upload and submitting the form, this image would then be uploaded to http://domain/upload, where it is displayed once the upload is finished.",
    "proLink": "http://git.io/vqP7u",
    "proTech": ["Node.js", "HTML/CSS"]
  },
  {
    "proName": "Random Quote Generator",
    "proDesc": "This is a simple random quote generator using CSS, JavaScript arrays, random number generator, string methods, and a jQuery event handler.",
    "proLink": "http://codepen.io/McQuinTrix/full/eNrRVE/",
    "proTech": ["HTML5/CSS3", " JavaScript", " jQuery"]
  },
  {
    "proName": "How'z the weather, Homie?",
    "proDesc": "A Local weather app.  It uses two api queries to gather local information, and display the local weather conditions.",
    "proLink": "http://codepen.io/McQuinTrix/full/GJdGzB",
    "proTech": ["HTML5/CSS3", " JavaScript", " jQuery"]
  },
  {
    "proName": "Twitch TV API App",
    "proDesc": "A Twitch TV API app which lets user see whether a certain user is currently streaming on Twitch.tv. Clicking the status output will send the user directly to the user's Twitch.tv channel.If user is streaming, you can see additional details about what they are streaming. Also, a search through the streams listed. It uses two api queries to gather user information, and display the information about the user.",
    "proLink": "http://codepen.io/McQuinTrix/full/pJaOzK/",
    "proTech": ["HTML", " BootStrap CSS", " JavaScript", " jQuery", " Angular.js"]
  },
  {
    "proName": "FreeCodeCamp Camper News",
    "proDesc": "As a user, I can browse recent posts from Camper News with number o likes. Also I can click on a post to be taken to the story's original URL and I can click a link to go directly to the post's discussion page.",
    "proLink": "http://codepen.io/McQuinTrix/full/LVvEQV/",
    "proTech": ["HTML/CSS3", "BootStrap CSS", "JavaScript", "Angular.js"]
  }
]

var myPort = angular.module("myPort",[]);

myPort.controller("projectsController",["$scope",function($scope){
  $scope.myProj = myProjects;
}])
