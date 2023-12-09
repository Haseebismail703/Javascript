let abc = 'on'

let btn = document.getElementById('btn')
let img = document.getElementById('img')
// let abc = 'on'

btn.addEventListener("click", () => {
  if (abc === 'on') {
    btn.innerText = 'OFF'
    img.src = "https://www.iconarchive.com/download/i136733/microsoft/fluentui-emoji-3d/Light-Bulb-3d.1024.png"
    abc = 'off'
  } 
  else {
    btn.innerText = 'ON'
    img.src = "https://previews.123rf.com/images/www3d/www3d1711/www3d171100001/89319097-3d-illustration-of-light-bulb-isolated-on-white-background-realistic-3d-rendering-of-incandescent.jpg"
    abc = 'on'
  }
})


