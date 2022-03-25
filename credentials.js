const firebaseConfig = {
    apiKey: "AIzaSyD3pXPdRofGW-ZgmrMYFHnkhHOCZ0qmupc",
    authDomain: "gamelibrary-c7600.firebaseapp.com",
    projectId: "gamelibrary-c7600",
    storageBucket: "gamelibrary-c7600.appspot.com",
    messagingSenderId: "602120572372",
    appId: "1:602120572372:web:fc8ef615b9bb123f085a41",
    measurementId: "G-M1KZEHVXWB"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

let reference = database.ref("messages");

//reference.push("hello world!");



//reference.on("value", getData, error);

function error(err) {
    console.log("There was an error! Trying again...");
    console.log(err)
}
