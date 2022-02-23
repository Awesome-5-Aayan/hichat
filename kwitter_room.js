const firebaseConfig = {
      apiKey: "AIzaSyCSVZNqKDRH0UkPf8si3ilc3fVRhLo6OI4",
      authDomain: "hi-chat-a6fcd.firebaseapp.com",
      databaseURL: "https://hi-chat-a6fcd-default-rtdb.firebaseio.com",
      projectId: "hi-chat-a6fcd",
      storageBucket: "hi-chat-a6fcd.appspot.com",
      messagingSenderId: "377911906302",
      appId: "1:377911906302:web:ec8c896881cd2c7695baaf",
      measurementId: "G-4M243SPTM6"
    };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      console.log("add room called");
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
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}

