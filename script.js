// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getFirestore, collection, getDoc,getDocs, addDoc, setDoc, doc, updateDoc, query, where} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage, uploadBytes, ref as sRef} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";


    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBb5nShxwID8EWHCAb7LKbX9Da8w9p6YYg",
        authDomain: "teamu6-5e7a0.firebaseapp.com",
        projectId: "teamu6-5e7a0",
        storageBucket: "teamu6-5e7a0.appspot.com",
        messagingSenderId: "178981533880",
        appId: "1:178981533880:web:4b2de9c06e9bd7e40b1c4d",
        measurementId: "G-NMJY4PM8CE"
    };

    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);//getDatabase(app);
    

    const colUsers = collection(db,"users");
    const storage = getStorage();

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id);
      });
      
    var doesExist = false;

    //console.log(snapshot.get("locked"));



    document.getElementById("next").addEventListener("click", function() {
        window.location.href = "changePassword.html?username="+username;
    });

const registerButton = document.getElementById('registerAuthenticatorBtn');
    // Add a click event listener to the register button
    registerButton.addEventListener('click', function() {
        // Redirect to the register.html page
        window.location.href = 'register.html';
    });

const loginButton = document.getElementById('loginAuthenticatorBtn');
    // Add a click event listener to the login button
    loginButton.addEventListener('click', function() {
        
        var x = document.getElementById('username').value;
        var lock;
        console.log(x);

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id);
            if (doc.id == x) {
                doesExist = true;
                lock = doc.get("locked");
            }
          });


        if(x != ""){
            if(doesExist){
                if(lock == 5){
                    alert("Your account has been locked due to 5 failed attempts. Please contact an admin to continue.");
                }
                else{
                    window.location.href = 'inputPSWD.html?username='+document.getElementById('username').value; 
                }
            }
            else{
                alert("Please enter a username that exists.");
            }      
        }
        else{
            alert("Please enter your username");
        }

        
    });
    /*
    const signoutButton = document.getElementById('loginAuthenticatorBtn');
    // Add a click event listener to the login button
    loginButton.addEventListener('click', function() {
        // Redirect to the register.html page
        window.location.href = 'inputPSWD.html?username='+document.getElementById('username').value;
        
    });
    */