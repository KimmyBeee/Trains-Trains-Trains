//Initialize Firebase
var config = {
    apiKey: "AIzaSyDdZlTOiWkLzoO9F6i6IFYLI64n8d-WWwY",
    authDomain: "school-activities-52c5e.firebaseapp.com",
    databaseURL: "https://school-activities-52c5e.firebaseio.com",
    projectId: "school-activities-52c5e",
    storageBucket: "",
    messagingSenderId: "870307371289"
  };
  firebase.initializeApp(config);

var database = firebase.database();

//Pushing the 'Submit' button on the 'Add Train form...
$("#submit").on("click", function(event)	{
	event.preventDefault();
//..takes the user inputs from the form
	var trainName = $("#input-train-name").val().trim();
	var destination = $("#input-destination").val().trim();
	var trainTime = $("#input-time").val().trim();
	var frequency = $("#input-frequency").val().trim();
//Create local object to hold input info
	var newTrain = {
		name: trainName,
		destination: destination,
		time: trainTime,
		frequency: frequency
	};
//Uploads the new train info to the database
	database.ref().push(newTrain);

//Console log errthang
	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.time);
	console.log(newTrain.frequency);
//Alert...
	alert("You have added a new train");
//Clear text boxes
	$("#input-train-name").val("");
	$("#input-destination").val("");
	$("#input-time").val("");
	$("#input-frequency").val("");
});