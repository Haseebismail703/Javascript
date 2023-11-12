import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
  

let sbtn = document.getElementById('sbtn')

sbtn.addEventListener('click',()=>{

  let semail = document.getElementById('semail')
  let spassword = document.getElementById('spassword')


    const firebaseConfig = {
    apiKey: "AIzaSyD0FjVwlw_dnXudam_YmvtG-yipsLD8efg",
    authDomain: "project-1-64704.firebaseapp.com",
    projectId: "project-1-64704",
    storageBucket: "project-1-64704.appspot.com",
    messagingSenderId: "658759651298",
    appId: "1:658759651298:web:26348013c0010a765cf3bb",
    measurementId: "G-XV94SF7FXY"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  signInWithEmailAndPassword(auth, semail.value, spassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     console.log(user)


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    
    location.href = './welcome.html'

})
  