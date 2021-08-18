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
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag= "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+ firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:"+ like + "</span></button><hr>"; 
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;


      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clickd on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+ 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
         like : updated_likes   
      });
}


function logout()
{
      localStorage.removeItem("uname");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}



