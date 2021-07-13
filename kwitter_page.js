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
  firebase.initializeApp(firebaseConfig); //YOUR FIREBASE LINKS

  function getData() {
        firebase.database().ref("/" + room_name).on('value', function (snapshot) {
              document.getElementById("output").innerHTML = "";
              snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key;
                    childData = childSnapshot.val();
                    if (childKey != "purpose") {
                          firebase_message_id = childKey;
                          message_data = childData;
                          //Start code

                          //End code
                    }
              });
        });
  }
  getData();

  function send() {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name: user_name,
              message: msg,
              like: 0
        });

        document.getElementById("msg").value = "";
  }