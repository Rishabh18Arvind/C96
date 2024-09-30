
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBSocr2-WoQp1d58xlQraXkdHWbIY--xSs",
      authDomain: "c93-kwitter-449c1.firebaseapp.com",
      databaseURL: "https://c93-kwitter-449c1-default-rtdb.firebaseio.com",
      projectId: "c93-kwitter-449c1",
      storageBucket: "c93-kwitter-449c1.appspot.com",
      messagingSenderId: "965964819609",
      appId: "1:965964819609:web:5488dccb91a66000b19c08"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");

     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

     function addRoom()
     {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  
      = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      
      });
    });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}