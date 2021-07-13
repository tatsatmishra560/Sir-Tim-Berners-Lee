
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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}