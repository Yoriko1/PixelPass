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

    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    console.log(username);
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();//getDatabase(app);

    const colUsers = collection(db,"users");
    const storage = getStorage();
    
    var myDocRef;
    var docData;
    var imgUpdateRef;

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id);
      });
      
    var doesExist = false;
    var match=false;

    var fileName;
    var fileImg;
    var imgRef;
    var imageInput;


    var email;
    var phonenumber;
    var imgName;
    var password = [];

    //upload info

    //upload image
    
    document.getElementById("nextStepBtn2").addEventListener("click", function() {
        var x = document.getElementById('username').value;
        console.log(x);
        if(x == ""){
            alert("Please enter your username.");
        }
        else{
            if(x == username){
                match = true;
                currentStep = 3;
                showStep(currentStep);
            }
            else{
                match = false;
                alert("Please enter your username.");
            }
        }



        //document.getElementById("confirm").style.visibility = "hidden";
        //document.getElementById("confirm").setAttribute("hidden","hidden");

    });


    
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

            imgUpdateRef = doc(db,'users',username);
            updateDoc(imgUpdateRef,{
                img: imgId
            })
        }
    });
    /*
    document.getElementById("shufflebutton").addEventListener("click", function() {
        password = sequence;
        console.log(password);
        console.log(username);
        console.log(sequence);
        [sequence[1], sequence[3]] = [sequence[3], sequence[1]];
        [sequence[2], sequence[6]] = [sequence[6], sequence[2]];
        [sequence[5], sequence[7]] = [sequence[7], sequence[5]];
        password = sequence;
        console.log(password);
        console.log(username);
        console.log(sequence);
    });
    */
    function save(){ //save password
                        


        //imagePieces.forEach(t => {sequence.push(t.num);});
        // TODO: connect to DB to save the sequence array to.
        // TODO: Redirect to login
        
                           
    }
    document.getElementById("confirm").addEventListener("click", function() {
        //username = document.getElementById('username').value;
        password = sequence;//document.getElementById('test');
        imgUpdateRef = doc(db,'users',username);

        console.log(password);
        console.log(username);

        updateDoc(imgUpdateRef,{
            sequence: password
        })
    });
    /*
    document.getElementById("confirm").addEventListener("click", function() {

        [sequence[1], sequence[3]] = [sequence[3], sequence[1]];
        [sequence[2], sequence[6]] = [sequence[6], sequence[2]];
        [sequence[5], sequence[7]] = [sequence[7], sequence[5]];

        imgUpdateRef = doc(db,'users',username);
        console.log(imgUpdateRef);
        password = sequence;
        updateDoc(imgUpdateRef,{
            sequence: password
        })

        var saved = "Password saved! Please take a screenshot or a picture as a backup.";
        alert(saved);

        window.location.href = 'index.html';
    });
    */

