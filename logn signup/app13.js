// var  obj= {
//     s_id : '1',
//     s_name : 'HASEEB',
//     s_age : '20'

// }

// for(var key in obj ){
//     document.write(key+':'+  obj[key]+'<br>')
// }


// var obj  = {
//     s_id : '1',
//     s_Name : 'HAseeb',
//     s_age : '20'

// }

// for(var a in obj ){
//     document.write(a+obj[a])
// }




// localStorage.setItem('first name','Haseeb')

// sessionStorage.setItem('first name','Haseeb')

function signup (){
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('email',email)
    localStorage.setItem('pass',pass)
    
    

    if(email==''&& pass==''){
        alert('ksjd')
        location.href = './sign up.html'
    }

    else if    (localStorage.getItem('email')==email && localStorage.getItem('pass')==pass ){
        { location.href = './sign in.html'}
    }
    
}

function signin(){
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value




    if(email==''&& pass==''){
        alert('ksjd')
        location.href = './sign up.html'
    }





  else if (localStorage.getItem('email')==email && localStorage.getItem('pass')==pass )
    
   { location.href = './das.html'}

    else if (email==='' && pass ==='' ){
        alert('please enter Email or password')
        // location.href = './sign up.html'
    }
        
    
else 
{    alert('invalid email and password')
   
}

}

   
    function signout(){
      location.href = './sign up.html'
    }







                                   // new


