// setInterval(function(){
//     document.write('hello world')
// },1000)

// function timer(){
//     document.write('Saad')
// }
// setInterval(timer,4000)

// setTimeout(function(){
//     document.write('abcd')
// },4000)


// var num = 0
// setInterval(function(){
//     num++
//     console.log(num)
// },10)

var minutes = 0
var seconds = 0
var miliseconds =0
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmili = document.getElementById('msec')
var interval;



function start(){
    interval = setInterval(function(){
        miliseconds++
        getmili.innerHTML = miliseconds
        if(miliseconds >= 100){
            seconds++
            getsec.innerHTML = seconds
            miliseconds = 0
        }
        else if(seconds >= 3){
            minutes++
            getmin.innerHTML = minutes
            seconds = 0
        }
    },10)  
    document.getElementById('sss').disabled = true
}
function stop(){
    clearInterval(interval)
    document.getElementById('sss').disabled = false
}

function reset(){
    minutes = '00'
    miliseconds = '00'
    seconds = '00'
    getmin.innerHTML = minutes
    getsec.innerHTML = seconds
    getmili.innerHTML = miliseconds
}

// function timer (){
//     document.write ('Haseeb')

// }

// setInterval(timer,100)

//  function tim (){
//     document.write('haseeb')
//  }
// setTimeout(tim,100)


// var num1 = 1

// setInterval(function num(){
//     num1++
//     console.log(num1)
// },10)



// var hr = 0
// var sec = 0
// var msec = 0
// var gethr = document.getElementById('hr')
// var getsec = document.getElementById('sec')
// var getmsec = document.getElementById('msec')

// setInterval(function(){

//   msec++
//   getmsec.innerHTML= msec 
//   if(msec == 100){
//     sec++
//     getsec.innerHTML = sec
//     msec = 0
//   }

// else if (sec >= 5){
//     hr++
//     gethr.innerHTML= hr
//     sec = 0
// }

// },10)







