// logn sign up 



// localStorage.setItem('first name','Haseeb')

// sessionStorage.setItem('first name','Haseeb')

// function signup (){
//     var email = document.getElementById('semail').value
//     var pass = document.getElementById('spass').value
//     localStorage.setItem('email',email)
//     localStorage.setItem('pass',pass)
    
//     if(email==''&& pass==''){
//         alert('ksjd')
//         location.href="signup.html"
//     }

//     else if (localStorage.getItem('email')==email && localStorage.getItem('pass')==pass ){
//          location.href="signin.html"
//     }
    
// }

// function signin(){
//     var email = document.getElementById('lemail').value
//     var pass = document.getElementById('lpass').value




//     // if(email==''&& pass==''){
//     //     alert('ksjd')
//     //     location.href = './signup.html'
//     // }





//    if (localStorage.getItem('email')==email && localStorage.getItem('pass')==pass ){
//      location.href = './das.html'}

//     else if (email=='' && pass =='' ){
//         alert('please enter Email or password')
//         // location.href = './sign up.html'
//     }
        
    
// else 
// {    alert('invalid email and password')
   
// }

// }

   
   



function signup (){
    var email = document.getElementById('semail').value;
    var pass = document.getElementById('spass').value;
    localStorage.setItem('email',email);
    localStorage.setItem('pass',pass);
    location.href="./signin.html";
}

function signin(){
    var email = document.getElementById('lemail').value;
    var pass = document.getElementById('lpass').value;
    if (localStorage.getItem('email') === email && localStorage.getItem('pass') === pass) {
        location.href="./dash.html";
    } else {
        alert('invalid email and password');
        location. href="./signup.html";
    }
}

function signout(){
    location.href="./index.html"
}














