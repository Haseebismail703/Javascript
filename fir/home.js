import { auth } from './config.js';
import { signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
    } else {
        window.location = 'login.html'
    }
});

const btn = document.querySelector('.logout-btn');


btn.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('logout succesfully');
        window.location = 'login.html'
    }).catch((error) => {
        console.log(error);
    });
})