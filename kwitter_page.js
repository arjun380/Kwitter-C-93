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
    uname = localStorage.getItem("uname");
    room_name = localStorage.getItem("room_name");
function send()
{
      mesg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:uname,
            message:mesg,
            like:0
                  });
                  document.getElementById("msg").value = " ";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("uname");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function logout()
{
      localStorage.removeItem("uname");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

