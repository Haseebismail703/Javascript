// var userinput = prompt('Enter city name')
// var arr = ['Karachi','Islamabad','Lahore','Qwetta','Peshawer']
// var pro1 = userinput.slice(0).toUpperCase()
// var pro2= userinput.slice(1).toLowerCase()
// var res = pro1+pro2

// document.write(pro1)

// var num = prompt('enter youre name')
// var num1 = num.slice(0,1).toUpperCase()
// var num2 = num.slice(1).toLowerCase()
// var res = num1+num2
// document.write(res) 


// var arr = ['Karachi','Islamabad','Lahore','Qwetta','Peshawer']

// document.write(arr.lastIndexOf('Islamabad'))

// var per = 45.5

// document.write(Math.round(per))

var player1 = prompt('enter first player')
var player2 = prompt('enter second player')
var toss = Math.random()*2

var ch = Math.floor(toss) 

if (ch ==0 ){
    document.write(player1+'Head win')
}
else{
    document.write(player2+'Tails win')
}


