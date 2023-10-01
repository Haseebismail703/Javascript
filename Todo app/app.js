
// getAttribute

// function clicke(){
//     var a = document.getElementById('inp')
//     var b = a.getAttribute('id')
//     console.log(b)
// }

//    hasAtribute 

// function clicke(){
//     var a = document.getElementById('inp')
//     var b = a.hasAttribute('id')
//     console.log(b)
// }


// function clicke(){
//     var a = document.getElementById('inp')
//     var b = a.setAttribute('class','aaa')
//     console.log(b)
// }
var getul = document.getElementById('ul')

function clicke(){
  

    var a = document.getElementById('inp')
    var li = document.createElement("li")
    var textli = document.createTextNode(a.value)

    li.appendChild(textli)
    getul.appendChild(li)
    a.value = ''

    // if (a.value ==''){
    //     alert('Enter value')
    // }
}

function Deletall() {
   getul.innerHTML=''
}



