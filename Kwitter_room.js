const firebaseConfig = {
    apiKey: "AIzaSyASB1C0GW28D6D_ViYweniSdRBYZ-MRcwQ",
    authDomain: "lets-chat-web-app-d6c8c.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-d6c8c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-d6c8c",
    storageBucket: "lets-chat-web-app-d6c8c.appspot.com",
    messagingSenderId: "53574190616",
    appId: "1:53574190616:web:e0f298115f97ea374b656d",
    measurementId: "G-Q7NXKXRDK8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_id=localStorage.getItem("username");
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
