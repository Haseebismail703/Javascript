



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



                                      //  question no 1 

// var a = prompt('Enter youre name')
// alert(a)



                                       // question no 2



// var a = +prompt('enter table no')


// for(i=1; i<=10;i++){
//     document.write(a+"x"+i+"="+a*i+ "<br>")
//     if(a==''){
//         for(i=1; i<=10;i++){
//             document.write(5+"x"+i+"="+5*i+ "<br>")
//         }

       
//     }

// }



                //  question no 3



//   var a = prompt('enter a city name')     
  
  
//   if (a == 'Karachi'){
//     alert("Welcome to the city of light")
//   }
 



    //  question no 4


    // var a = prompt('enter youre gender')

    // if(a=="male" ){
    //     alert('Good morning sir')
    // }
    // else if (a=='female'){
    //     alert('Good morning Ma,am')
    // }

    // else(
    //     alert('enter youre gender')
    // )
  


    // question no 5




    
var a = prompt('enter value')
if(a =='red')
{
    document.write(
    "<table border='3px'>"+
    " <tr>"+
        "<th>"+"signal coloure"+"</th>"+
    "<th>"+"Massage"+"</th>"+
 "</tr>"+
    " <td>"+
         'red'+
     "</td>"+
     " <td>"+
         'vehicle should stop'+
     "</td>"+
 
 
                        "</table>"
    )
}
else if (a=='yellow'){
    document.write(




    
    "<table border='3px'>"+
    " <tr>"+
        "<th>"+"signal coloure"+"</th>"+
    "<th>"+"Massage"+"</th>"+
 "</tr>"+
    " <td>"+
         'Yellow'+
     "</td>"+
     " <td>"+
         'redy to move'+
     "</td>"+
 
 
                        "</table>"

    )
}
else if (a=='green') {


document.write(

             "<table border='3px'>"+
   " <tr>"+
       "<th>"+"signal coloure"+"</th>"+
   "<th>"+"Massage"+"</th>"+
"</tr>"+
   " <td>"+
        'green'+
    "</td>"+
    " <td>"+
        'Vehicle can move now'+
    "</td>"+


                       "</table>"

)

}
else(
    alert('no')
)

