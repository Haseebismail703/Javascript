import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore, db, addDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";







let getbtn = document.getElementById('show')

if(getbtn){

getbtn.addEventListener('click',async() =>{
    const querySnapshot = await getDocs(collection(db, "users"));
    let getdiv = document.getElementById('getuser')
    getdiv.innerHTML += `<div>${doc.data().first}</div>
    <div>${doc.data().last}</div>`

    querySnapshot.forEach((doc) => {
      console.log(doc.data);
    });
})

}

