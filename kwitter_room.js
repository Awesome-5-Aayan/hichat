
var firebaseConfig = {
      apiKey: "AIzaSyANEe5UgRbvzTMOKeQ9m9Yf7mvcO7SRhYk",
      authDomain: "hi-chat-1d0bf.firebaseapp.com",
      databaseURL: "https://hi-chat-1d0bf-default-rtdb.firebaseio.com",
      projectId: "hi-chat-1d0bf",
      storageBucket: "hi-chat-1d0bf.appspot.com",
      messagingSenderId: "56009083780",
      appId: "1:56009083780:web:486d5271c7748ab4adebd1",
      measurementId: "G-3S3G9KYNV9"
    };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', 
function(snapshot)
 {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) 
 {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-" + Room_names);
      row= "<div class = 'room_name' id = "+ Room_names + " onclick= 'redirectToRoom_name(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoom_name(name){
      console.log (name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}