// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCuoJpm3Hg12qf2BXJd6DrRAR5ACr-7q_Y",
      authDomain: "kwitter-a2cf4.firebaseapp.com",
      databaseURL: "https://kwitter-a2cf4-default-rtdb.firebaseio.com",
      projectId: "kwitter-a2cf4",
      storageBucket: "kwitter-a2cf4.appspot.com",
      messagingSenderId: "900942762927",
      appId: "1:900942762927:web:146ac453381e98b0f3155a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
