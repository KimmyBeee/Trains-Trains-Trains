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

//Convert train time to military time
	var milTrainTime = trainTime.format("H:MM");
	
//Create local object to hold input info
	var newTrain = {
		name: trainName,
		destination: destination,
		time: milTrainTime,
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

database.ref().on("child_added", function(childSnapshot, prevChildKey)	{

	var trainName = childSnapshot.val().name;
	var destination = childSnapshot.val().destination;
	var milTrainTime = childSnapshot.val().time;
	var frequency = childSnapshot.val().frequency;

	console.log(trainName);
	console.log(destination);
	console.log(milTrainTime);
	console.log(frequency);

	var trainTimeConverted = moment(milTrainTime, "hh:mm").subtract(1, "years");
		console.log(trainTimeConverted);

	var currentTime = moment();
		console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

	var timeDifference = moment().diff(moment(trainTimeConverted), "minutes");
		console.log("DIFFERENCE IN TIME: " + timeDifference);

	var timeRemainder = timeDifference % frequency;
		console.log(timeRemainder);

	var minutesAway = frequency - timeRemainder;
		console.log("MINUTES TILL TRAIN: " + minutesAway);

	var nextTrain = moment().add(minutesAway, "minutes");
		console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

	$("#train-table > tbody").append("<tr><td>" + trainName + "<tr><td>" + destination + "<tr><td>" + frequency + "<tr><td>" + nextTrain + "<tr><td>" + minutesAway + "<tr><td>");
}, function(errorObject) {
	console.log("Errors handled: " + errorObject.code);
});















