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
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message: msg, 
            like:0
      });
document.getElementById("msg").value = "";
}