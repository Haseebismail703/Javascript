



// var date = new Date()
// document.write(date)


// var date = new Date()
// var getday = date.getHours()
// document.write(getday)
// var date = new Date()
// var get = date.getDate()
// document.write(date)

// var date = new Date ()
// var convert = date.toString()
// var copy = convert.slice(0,16)
// document.write(copy)



var a= prompt('enter youre date')
var b =prompt('enter month')
var c =prompt('enter year')
var d = a=b=c



if(c>2023){
    document.write('no')
}
else(
    document.write('youre age')
)

var date = new Date()
var datemilli = date.getTime ()
// document.write (datemilli)


var dob = new Date(d)
var dobmili = dob.getTime()
// document.write(dobmili)


var c =  datemilli-dobmili
// document.write(c)



var formula = c /(1000*60*60*24*365)
document.write(Math.floor(formula))



