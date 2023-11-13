// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";





// const firebaseConfig = {
//         apiKey: "AIzaSyD0FjVwlw_dnXudam_YmvtG-yipsLD8efg",
//         authDomain: "project-1-64704.firebaseapp.com",
//         projectId: "project-1-64704",
//         storageBucket: "project-1-64704.appspot.com",
//         messagingSenderId: "658759651298",
//         appId: "1:658759651298:web:26348013c0010a765cf3bb",
//         measurementId: "G-XV94SF7FXY"
//       };
    
//     //   Initialize Firebase
//       const app = initializeApp(firebaseConfig);
//       const auth = getAuth(app);
//       const db = getFirestore(app);




























































import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// add data sa uthaya hai
import { getFirestore, collection, addDoc , getDocs } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

  

let btn = document.getElementById('btn')
if(btn){
btn.addEventListener('click',()=>{

  let email = document.getElementById('email')
  let password = document.getElementById('password')


    const firebaseConfig = {
    apiKey: "AIzaSyD0FjVwlw_dnXudam_YmvtG-yipsLD8efg",
    authDomain: "project-1-64704.firebaseapp.com",
    projectId: "project-1-64704",
    storageBucket: "project-1-64704.appspot.com",
    messagingSenderId: "658759651298",
    appId: "1:658759651298:web:26348013c0010a765cf3bb",
    measurementId: "G-XV94SF7FXY"
  };

//   Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then(async(userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)


// add data  sa uthaya hai

    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: email.value,
        last: password.value,
     
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);

    }
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    
  });

})

}

  
  // add data 
 


 




let getbtn = document.getElementById('show')

if(getbtn){

getbtn.addEventListener('click',async()=>{
  const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
})
}


