
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCMEexNloXEZ6okykV5Li28Bf5wAkrR8Ow",
  authDomain: "train-project-9bff5.firebaseapp.com",
  databaseURL: "https://train-project-9bff5.firebaseio.com",
  projectId: "train-project-9bff5",
  storageBucket: "train-project-9bff5.appspot.com",
  messagingSenderId: "658846807025"
};
firebase.initializeApp(config);

var database = firebase.database();

console.log(database)

var trainname = "";
var destination = "";
var firsttrain = "";
var frequency = 0;

// Capture Button Click
$("#add-train").on("click", function (event) {
  event.preventDefault();


  console.log(this)
  trainname = $("#train-name").val().trim();
  destination = $("#destination").val().trim();
  firsttrain = $("#first-train").val().trim();
  frequency = $("#frequency").val().trim();
  firsttrain = moment(firsttrain, "HH:mm").format("X");
  console.log(trainname)
  console.log(destination)
  console.log(firsttrain)
  console.log(frequency)


  // Code for the push
  database.ref().push({

    trainname: trainname,
    destination: destination,
    firsttrain: firsttrain,
    frequency: frequency

  });
});

database.ref().on("child_added", function (childSnapshot) {

  console.log(childSnapshot.val().trainname);
  console.log(childSnapshot.val().destination);
  console.log(childSnapshot.val().firsttrain);
  console.log(childSnapshot.val().frequency);


  $("#trains").append("<div class='well'><span id='tr'> " + childSnapshot.val().name +
    " </span><span id='email'> " + childSnapshot.val().email +
    " </span><span id='age'> " + childSnapshot.val().age +
    " </span><span id='comment'> " + childSnapshot.val().comment + " </span></div>");

  // Handle the errors
}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

