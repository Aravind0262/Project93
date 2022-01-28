// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCeOoyqb98TVI_LF5eSlKHKZMPWDcAXG_w",
  authDomain: "project-94-9b55a.firebaseapp.com",
  databaseURL: "https://project-94-9b55a-default-rtdb.firebaseio.com",
  projectId: "project-94-9b55a",
  storageBucket: "project-94-9b55a.appspot.com",
  messagingSenderId: "650759663361",
  appId: "1:650759663361:web:9607249b1081275678b500"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();