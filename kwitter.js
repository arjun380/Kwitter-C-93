function login(){

    username = document.getElementById("in").value;
    localStorage.setItem("uname",username);
    window.location="kwitter_room.html";
}