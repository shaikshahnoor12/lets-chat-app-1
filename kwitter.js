 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 function adduser(){

    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    
    window.location = "room.html";


}