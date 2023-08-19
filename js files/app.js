const app = firebase.initializeApp(firebaseConfig);
console.log(app)

const signup = () => {
    let username = document.getElementById('username').value;
    let contact = document.getElementById('contact').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = 'User'

    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            firebase.database().ref('users/' + user.uid).set({
                uid: user.uid,
                username: username,
                role: role,
                contact: contact,
                email: email,
                password: password
            })
                .then(() => {
                    const user = { email: email };
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log('User created successfully.')
                    window.location.href = '../Home/home.html'
                })
                .catch((error) => {
                    console.log(error);
                })
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode + ': ' + errorMessage)
        });
}

















// app.js

// Import the Firebase authentication module
// You should ensure the proper path to the Firebase SDK in your project
// e.g., "../js files/firebase-app.js" and "../js files/firebase-auth.js"
// import firebase from "path_to_firebase_auth";
// firebase-config.js

var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".userform");
    
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const username = document.getElementById("username").value;
      const contact = document.getElementById("contact").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      
      const radioButtons = document.querySelectorAll(".radio");
      let userType = "";
      radioButtons.forEach(button => {
        if (button.checked) {
          userType = button.nextElementSibling.textContent.trim();
        }
      });
      
      // Assuming you have already initialized Firebase in firebase-config.js
      const auth = firebase.auth();
      
      // Create a new user account with email and password
      auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          // User account created successfully
          const user = userCredential.user;
          
          // You can save additional user data to Firebase's Firestore or Realtime Database
          // Here, I'm just printing the user info to the console
          console.log("User created:", user.uid);
          console.log("Username:", username);
          console.log("Contact:", contact);
          console.log("User Type:", userType);
          
          // Clear the form after submission
          form.reset();
        })
        .catch(error => {
          console.error("Error creating user:", error.message);
        });
    });
  });
  