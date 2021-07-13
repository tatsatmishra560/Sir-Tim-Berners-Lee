//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDkNBF8W_CmCadejEp936Ho6yM3VwZ8Zmo",
      authDomain: "kwitter-45ccc.firebaseapp.com",
      databaseURL: "https://kwitter-45ccc-default-rtdb.firebaseio.com",
      projectId: "kwitter-45ccc",
      storageBucket: "kwitter-45ccc.appspot.com",
      messagingSenderId: "951656063024",
      appId: "1:951656063024:web:b6a608c1d4009a772b0df5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });

}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}