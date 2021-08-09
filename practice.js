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

  function unadd()
  {
     username =  document.getElementById("user_name").value;
     firebase.database().ref("/").child(username).update({
         purpose : "adding user"
     });
     
  }