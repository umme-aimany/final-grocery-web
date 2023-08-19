
  // // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  // import { getDatabase, ref,set,} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBFeWyecEH3LUMDWDj7XSLrQZA2I8gHOyw",
  //   authDomain: "smit-website-project.firebaseapp.com",
  //   projectId: "smit-website-project",
  //   storageBucket: "smit-website-project.appspot.com",
  //   messagingSenderId: "581979647007",
  //   appId: "1:581979647007:web:6c756e54284716a431b92a",
  //   measurementId: "G-MKZQ08H0C7"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const db = getDatabase(app);

  // document.getElementById("submit").addEventListener('click',function(e){
  //   set(ref(db, 'user/'+ document.getElementById("username").value),
  //   {
  //     username:document.getElementById("username").value,
  //     email :  document.getElementById("email").value ,
  //     contact :  document.getElementById("contact").value ,
  //     password :  document.getElementById("password").value ,

  //   })
  //   alert("login sucessfully !")
  // })
//   import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
//   measurementId: "YOUR_MEASUREMENT_ID"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app); // Changed 'analytics' to 'db'

// document.getElementById("submit").addEventListener('click', function(e) {
//   set(ref(db, 'user/' + document.getElementById("username").value), {
//     username: document.getElementById("username").value,
//     email: document.getElementById("email").value,
//     contact: document.getElementById("contact").value,
//     password: document.getElementById("password").value,
//   });
//   alert("Login successful!");
// });