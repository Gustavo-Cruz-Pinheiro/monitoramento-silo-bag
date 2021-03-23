const firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyB7aAQI95ww6YJRL4NLFVWOhVqzmUv6kkE",
  authDomain: "bd-silo.firebaseapp.com",
  databaseURL: "https://bd-silo.firebaseio.com",
  projectId: "bd-silo",
  storageBucket: "bd-silo.appspot.com",
  messagingSenderId: "966323339148",
  appId: "1:966323339148:web:3bde303e07e178865ba0a9",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

var rootRef = db.ref("/");
var connection;

rootRef.orderByChild("connection").on("child_added", function (snapshot) {
  connection = snapshot.val().connection;
});

module.exports = db;
