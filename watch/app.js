

var date = new Date ()
var convert = date.toString()
var copy = convert.slice(0,16)
document.write(copy)



  // var a = 00
  // var v = kask
  // var sd = ajs




var hr = 0
var sec = 0
var msec = 0
var gethr = document.getElementById('hr')
var getsec = document.getElementById('sec')
var getmsec = document.getElementById('msec')

setInterval(function(){

  msec++
  getmsec.innerHTML= msec 
  if(msec == 100){
    sec++
    getsec.innerHTML = sec
    msec = 0
  }

else if (sec >= 60){
    hr++
    gethr.innerHTML= hr
    sec = 0
}

},1000)



// Q no 17 

// let date = new Date()
// let getDate = date.getHours()

// if(getDate>=12){
//     alert('its PM')
// }
// else(
//     alert(' its AM')
// )
