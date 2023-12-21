// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getFirestore, collection, getDoc, addDoc, setDoc, doc, updateDoc} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage, uploadBytes, ref as sRef, getBytes,getStream,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";


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

    //const username = document.getElementById('username');
    console.log(username);

    const docRef = doc(db, "users",username);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    var imgUpdateRef;


    testSequence = data.sequence;
    console.log(testSequence);

    var imgName = data.img;
    var img = new Image();
    var lock = 0;


    var url = await getDownloadURL(sRef(storage, imgName));
    //console.log(imgUrl);
    img.src = url;
    console.log(img);
    document.getElementById("image").src = url;

    document.getElementById("enter").addEventListener("click", function() {
      imgUpdateRef = doc(db,'users',username);
      console.log(imgUpdateRef);
      updateDoc(imgUpdateRef,{
        locked: lock
      });

    if(lock < 5){
      if(input.length < 9){
        clearSelected();
        alert("incorrect");
        lock++;
        console.log(lock);
        return;
    }
    
      for(var i = 0; i < 9; i++){
        if(input[i] != testSequence[i]){
          clearSelected();
          alert("incorrect");
          lock++;
          console.log(lock);
          return;
        }
        else{
          lock = 0;
          alert("Sucessfully logged in!"); //TODO: make this better lol
          window.location.href = "loggedin.html?username="+username;
          return;
        }
      }  
    }
    else{
      alert("Your account has been locked due to 5 failed attempts. Please contact an admin to continue.");
      lock = 0;
      window.location.href = "index.html";
    }

  });


    





      

    

    