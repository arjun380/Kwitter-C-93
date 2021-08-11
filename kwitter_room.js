
var firebaseConfig = {
      apiKey: "AIzaSyCR3-a1sbpp5KGNoDOOQ1h0E-Bqe91m0l0",
      authDomain: "kwitter-fcbb6.firebaseapp.com",
      databaseURL: "https://kwitter-fcbb6-default-rtdb.firebaseio.com",
      projectId: "kwitter-fcbb6",
      storageBucket: "kwitter-fcbb6.appspot.com",
      messagingSenderId: "602066176853",
      appId: "1:602066176853:web:d1d7b763bb1dc758b93ddc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addroom()
    {
room_name = document.getElementById("irn").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
