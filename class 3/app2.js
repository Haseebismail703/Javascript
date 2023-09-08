// var num1=+prompt("enter value 1")
// var num2=+prompt("enter value 2")
// var op=prompt("Enter operator")
// if(op=="+"){
//     document.write(num1+num2)
// }
// else if(op=="-"){
//     document.write(num1-num2)
// }
// else if(op=="*"){
//     document.write(num1*num2)
// }
// else if(op=="/"){
//     document.write(num1/num2)
// }
// else if(op=="%"){
//     document.write(num1%num2)
// }
// else{
//     document.write("Invalid Operator")
// }
// var a = prompt('English')
// var b = prompt('Urdu')
// var c = prompt('Islamiat')
// var d = prompt('Science')
// var e = prompt('Math')


// var a = parseInt(prompt("Enter English Marks"));
// var b = parseInt(prompt("Enter Maths Marks"));
// var c = parseInt(prompt("Enter Physics Marks"));
// var d = parseInt(prompt("Enter Physics Marks"));
// var e = parseInt(prompt("Enter Physics Marks"));
// function Percentage(a,b,c,d,e) {
//     var x = a+b+c+d+e;
//     var z = Math.floor(x / 300 * 100) //percentage formula
//     return z;
// }

// var Total = Percentage(English, Maths, Physics);
// document.write("Total Percentage is :" + Total + "%")



// function percentage (a,b,c,d,e){
//     var x = (a,b,c,d,e)
//     var y = x /300 *100 
//     return y ;
// }

// var Total = parcentage (a,b,c,d,e)
// document.write('Total :' + Total + '%')

// document.write(

//              "<table border='3px'>"+
  

//                             //  1
//     " <tr>"+
//     "<th>"+"English"+"</th>"+
// "</tr>"+
// " <td>"+
//      +add+
//  "</td>"+
//                 //    2
//  " <tr>"+
//  "<th>"+"Urdu"+"</th>"+
// "</tr>"+
// " <td>"+
//   +add+
// "</td>"+
//                     //   3
// " <tr>"+
// "<th>"+"Islamiat"+"</th>"+
// "</tr>"+
// " <td>"+
//  +add+
// "</td>"+
//                     //  4
// " <tr>"+
// "<th>"+"Science"+"</th>"+
// "</tr>"+
// " <td>"+
//  +add+
// "</td>"+

//             // 5
//             " <tr>"+
//             "<th>"+"Math"+"</th>"+
//         "</tr>"+
//         " <td>"+
//              +add+
//          "</td>"+
//                     //   6
                    
//                     " <tr>"+
//                     "<th>"+"Toatal"+"</th>"+
//                 "</tr>"+
//                 " <td>"+
//                      +add+
//                  "</td>"+
             



//                        "</table>"


                    

// )



//         var English = parseInt(prompt("Enter English Marks"));
//         var Math = parseInt(prompt("Enter Maths Marks"));
//         var Physics = parseInt(prompt("Enter Physics Marks"));
//         var bio = parseInt(prompt('Enter bio marks'))
//         var Islamiat = parseInt(prompt('Enter islamiat marks'))
//         var urdu = parseInt(prompt('Enter Urdu marks'))
       


//         function Percentage(num1, num2, num3 , num4, num5 , num6 )
//          {
//             var x =( num1 + num2 + num3 +num4+ num5 + num6 ) ;
//             var z = (x / 600 * 100) //percentage formula
//             return z;
//         }

       
//         var Total  = Percentage(English, Math, Physics ,bio,Islamiat,urdu);

        

//          var userInput= Total
        

//         document.write(

//             "<table border='3px'>"+
//   " <tr>"+
//       "<th>"+"English"+"</th>"+
//       "<th>"+"Math"+"</th>"+
//       "<th>"+"Physics"+"</th>"+
//       "<th>"+"Biology"+"</th>"+
//       "<th>"+"Islamiat"+"</th>"+
//       "<th>"+"Urdu"+"</th>"+
//       "<th>"+"Total parcentage  is :"+"</th>"+
//       "<th>"+"Grade :"+"</th>"+



//   "</tr>"+


//   "<tr>"+

//   " <td>"+
//        +English+" "+
//    "</td>"+
   
//   " <td>"+
//   +Math+" "+
// "</td>"+

// " <td>"+
// +Physics+" "+
// "</td>"+

// " <td>"+
// +bio+" "+
// "</td>"+

// " <td>"+
// +Islamiat+" "+
// "</td>"+

// " <td>"+
// +urdu+" "+
// "</td>"+



// " <td>"+
// +Total+ "%"+
// "</td>"+

// " <td>"+userInput+ 
// "</td>"+

// " </tr>"+

        


   

  


//                       "</table>"




// )



// if(userInput>= 80 && userInput < 101){
//         document.write('A+')
//     }
//     else if(userInput >=70 && userInput < 80){
//         document.write('A')
//     }
    
//     else if(userInput >=60 && userInput < 70){
//         document.write('B')
//     }
    
//     else if(userInput >=50 && userInput < 60){
//         document.write('C')
//     }
    
//     else if(userInput >=40 && userInput < 50){
//         document.write('D')
//     }
//     else{
//         document.write('Dobar koshish kara')
//     }
    

var English = parseInt(prompt("Enter English Marks"));
var Math = parseInt(prompt("Enter Maths Marks"));
var Physics = parseInt(prompt("Enter Physics Marks"));
var bio = parseInt(prompt('Enter bio marks'))
var Islamiat = parseInt(prompt('Enter islamiat marks'))
var urdu = parseInt(prompt('Enter Urdu marks'))

function Percentage(num1, num2, num3, num4, num5, num6) {
  var x = (num1 + num2 + num3 + num4 + num5 + num6);
  var z = (x / 600 * 100); //percentage formula
  return z;
}

var Total = Percentage(English, Math, Physics, bio, Islamiat, urdu);

var userInput = Total;

document.write(
  "<table border='3px'>" +
    " <tr>" +
      "<th>" + "English" + "</th>" +
      "<th>" + "Math" + "</th>" +
      "<th>" + "Physics" + "</th>" +
      "<th>" + "Biology" + "</th>" +
      "<th>" + "Islamiat" + "</th>" +
      "<th>" + "Urdu" + "</th>" +
      "<th>" + "Total parcentage  is :" + "</th>" +
      "<th>" + "Grade :" + "</th>" +
    "</tr>" +

    "<tr>" +
      "<td>" + English + "</td>" +
      "<td>" + Math + "</td>" +
      "<td>" + Physics + "</td>" +
      "<td>" + bio + "</td>" +
      "<td>" + Islamiat + "</td>" +
      "<td>" + urdu + "</td>" +
      "<td>" + Total + "%" + "</td>" +
      "<td>" + Grade(Total) + "</td>" +
    "</tr>" +
  "</table>"
);

function Grade(percentage) 
{
  if (percentage >= 90) {
    return "A+";
  }
   else if (percentage >= 80) {
    return "A";
  }
   else if (percentage >= 70) {
    return "B";
  }
   else if (percentage >= 60) {
    return "C";
  }
   else if (percentage >= 50) {
    return "D";
  }
   else if (percentage >= 40) {
    return "E";
  }
   else {
    return "Fail";
  }
}

