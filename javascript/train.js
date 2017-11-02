







  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBnf2gT8mSGUA5NTeHSQYWRtm3nGdfL5Gw",
    authDomain: "fir-train-8cd8c.firebaseapp.com",
    databaseURL: "https://fir-train-8cd8c.firebaseio.com",
    projectId: "fir-train-8cd8c",
    storageBucket: "",
    messagingSenderId: "931997415246"
  };
  firebase.initializeApp(config);



// We will create a variable to reference the database

var database = firebase.database();

// check if we are linked to the firebase
console.log(database)

// create button to add new trains
$('#addTrainBtn').on ("click",function(){
  event.preventDefault();

//get user input
var  trainName = $('#trainNameInput').val().trim()
var  destination = $('#destInput').val().trim()
var  firstTrain = $('#firstTrainInput').val().trim()
var  frequency = $('#freqInput').val().trim()

// create object to hold train data

var newTrain = {
  name:trainName,
  dest: destination,
  first: firstTrain,
  freq: frequency

}

// We need to upload employee data to the database
database.ref().push(newTrain);

console.log(newTrain.name);
console.log(newTrain.dest);
console.log(newTrain.first);
console.log(newTrain.freq);

// reset all of the input boxes
var  trainName = $('#trainNameInput').val()("")
var  destination = $('#destInput').val()("")
var  firstTrain = $('#firstTrainInput').val()("")
var  frequency = $('#freqInput').val()("")

return false;

});


// Create a frirebase event to add trains to database and rows in html

database.ref().on("child_added", function(childSnapshot){
  console.log (childSnapshot.val());

// store all retrieved info in a variable
var trainName = childSnapshot.val().name;
var destination =childSnapshot.val().dest;
var firstTrain = childSnapshot.val.first;
var frequency =childSnapshot.val().freq;

// obtain train info
console.log(trainName);
console.log(destination);
console.log(firstTrain);
console.log(frequency);

$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + 
  destination + "</td><td>" + frequency + "</td><td>"+ nextTrain + "</td><td>"+
  tminutesTillTrain + "</td><tr>");

});



// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTimeConverted, "hh:mm").subtract(1, "years");
console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    
    



    