let getweather = () =>{


   fetch('https://api.openweathermap.org/data/3.0/onecall?q=karachi&exclude={part}&appid=4e0f2c1100954e52e1f203408e81150f')

   .then(res => {
    
    console.log(res)
})

   .catch(err => {
    
    
    console.log(err)

   })

}