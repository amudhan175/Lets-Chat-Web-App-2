function login(){
username = document.getElementById("user_input").value;
localStorage.setItem("username", username);
window.location="kwitter_room.html";
}