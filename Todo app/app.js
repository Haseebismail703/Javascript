
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
// var getul = document.getElementById('ul')

// function clicke(){
  

//     var a = document.getElementById('inp')
//     var li = document.createElement("li")
//     var textli = document.createTextNode(a.value)

//     li.appendChild(textli)
//     getul.appendChild(li)
//     a.value = ''

   
// }

// function Deletall() {
//    getul.innerHTML=' '
// }

var getul = document.getElementById('ul')

function clicke(){


    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var textli = document.createTextNode(a.value)
    li.appendChild(textli)
    getul.appendChild(li)
    a.value = ''

    //  del btn 
    
    var Deletbtn = document.createElement('button')
    var textlidel = document.createTextNode('Delete')
    Deletbtn.appendChild(textlidel)
    li.appendChild(Deletbtn)
    Deletbtn.setAttribute('onclick','del(this)')

    // edittext 

    var edits = document.createElement('button')
    var edittext = document.createTextNode('Edit')
    edits.appendChild(edittext)
    li.appendChild(edits)
   edits.setAttribute('onclick','edit(this)')

}

function Deletall(){
    getul.innerHTML= ''
}

function del(e){
    e.parentNode.remove()
}

function edit(e){
    var a = prompt('Enter value')
    e.parentNode.firstChild.nodeValue = a
}