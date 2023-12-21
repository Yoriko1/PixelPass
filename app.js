// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getFirestore, collection, getDoc, getDocs, addDoc, setDoc, doc, updateDoc} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
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
    
    var myDocRef;
    var docData;
    var imgUpdateRef;

    var fileName;
    var fileImg;
    var imgRef;
    var imageInput;


    var email;
    var phonenumber;
    var username;
    var imgName;
    var password = [];

    //upload info
    document.getElementById("nextStepBtn2").addEventListener("click", function() {

        email = document.getElementById('email').value;
        phonenumber = document.getElementById('phoneNumber').value;
        username = document.getElementById('username').value;

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id);
            if (doc.id == username) {
                doesExist = true;
            }
          });
        
        if(!doesExist){
            console.log(username,phonenumber,email);

            myDocRef = doc(colUsers,username);
            docData = {
                email: email,
                phonenumber: phonenumber
            }
            setDoc(myDocRef,docData);


            currentStep = 3;
            showStep(currentStep);
        }
        else{
            alert("Please enter a user name that does not exist.")
        }

    });

    //upload image
    
    document.getElementById("saveBtn").addEventListener("click", function() {
        //Gets image info and a ref for uploading
        preselect = false;
        imageInput = document.getElementById('imageUpload');
        fileImg = imageInput.files[0];
        fileName = fileImg.name;

        console.log(fileName);
        console.log(fileImg);

        imgRef = sRef(storage,fileName);
        uploadBytes(imgRef,fileImg);

        username = document.getElementById('username').value;
        imgUpdateRef = doc(db,'users',username);
        updateDoc(imgUpdateRef,{
            img: fileName
        })

    });

    document.getElementById("shuffleBtn").addEventListener("click", function() {
        //Gets image info and a ref for uploading
        if(preselect == true){
            imageInput = document.getElementById('selectedImage');
            fileImg = imageInput;
            fileName = imageInput.src;
            var imgId = id;

            console.log(fileName);
            console.log(fileImg);

            /*
            imgRef = sRef(storage,fileName);
            uploadBytes(imgRef,fileImg);
            */

            username = document.getElementById('username').value;
            imgUpdateRef = doc(db,'users',username);
            updateDoc(imgUpdateRef,{
                img: imgId
            })
        }
    });

    document.getElementById("confirm").addEventListener("click", function() {
        username = document.getElementById('username').value;
        password = sequence;//document.getElementById('test');
        imgUpdateRef = doc(db,'users',username);

        console.log(password);
        console.log(username);

        updateDoc(imgUpdateRef,{
            sequence: password
        })
    });

