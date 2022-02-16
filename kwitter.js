function addUser(){
    user_name = document.getElementById("user_name").value;
    console.log("adding user name is local stroage")
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}