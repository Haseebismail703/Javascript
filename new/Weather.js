import React, { useEffect, useState } from 'react';
import '../style/Weather.css'
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
function Weather() {
  // Store input value and weather data
  const [value, setvalue] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  // const [error, setError] = useState(null);
 


  const handleSearch = () => {

    if (value==='') {
      alert('Please enter a city name.')
      return;
    }
    // setError(null);
      fetch(`http://api.weatherapi.com/v1/current.json?key=1e7a499b04c04660b18154927241901&q=${value}&aqi=no`)
      
      .then(response => {
        if (!response.ok) {
        throw new Error('API error')
      }
        return response.json();
      })
      .then(data => 
        setWeatherData(data) ) 
        .catch(error => {
          if (error.message === 'API error') {
            alert('Please enter a correct city name')
          }
           else {
            // console.error(error); // Log other errors for debugging
          }
        });
       
          
     
     
     setvalue('')

     
  }

  return (
    <div  className='body' >

     {/* <h1>{error}</h1> */}
       {weatherData ? 
       
       <center>
      <div className='parent'>
        <div>
            <center>
            <input className='input' type="text"  value={value} onChange={e => setvalue(e.target.value)} />
        <button className='button'  onClick={handleSearch}  >Search</button>
          </center>
         
          
          
         <div>
          <center>
            
           {weatherData ? 
           
            <h1>{weatherData.location.name}<span className='p1'>/{weatherData.location.country}</span></h1>: <h1>hrdvf</h1>}

           <div  className='time' >


            <div>
            <p className='p' >{weatherData.location.localtime}</p>
         </div>    

          </div>

               <div className='img-1'>
            <img src={weatherData.current.condition.icon} alt="" className='img' />


               </div>
            

            <h1 >{weatherData.current.temp_c}°C<span className='p1'>/{weatherData.current.temp_f}f</span></h1>
          </center>
         </div>


     <div className='div' >



      <div className='div-1' >
       <div className='div-3-3'  >
        <WaterDropIcon className='icon'  />
       <p>{weatherData.current.humidity}%</p>
       <p>Humidity</p>
      </div>
      </div>


      <div className='div-2'>
        <div  className='div-3-3'>
        <AirIcon/>
        <p>{weatherData.current.wind_kph}km/h</p>
        <p>Wind Gusts</p>
        </div>
      </div>


      <div className='div-3'>
       <div className='div-3-3'  >
        <RemoveRedEyeIcon/>
        </div>
      <p>{weatherData.current.vis_km}km</p>
      <p>Visibilit</p>
      </div>
     </div>
        </div>
        
        
      </div>
</center>
        
        :
<center>
      <div className='parent'  >
        <div>
            <center>
            <input className='input' type="text" value={value} onChange={e => setvalue(e.target.value)} />
        <button className='button'  onClick={handleSearch}  >Search</button>
          </center>
         
          
          
         <div>
          <center>

            <h1>.../<span className='p1'></span></h1>

           <div  className='time' >


            <div>
            <p className='p' >.../</p>
         </div>    

          </div>

               <div className='img-1'>
                <img src="https://cdn.weatherapi.com/weather/64x64/day/122.png" alt="" className='img' />
               </div>
            

            <h1 >.../</h1>
          </center>
         </div>


     <div className='div' >



      <div className='div-1' >
       <div className='div-3-3'  >
        <WaterDropIcon className='icon'  />
        <p>.../</p>
       <p>Humidity</p>
      </div>
      </div>


      <div className='div-2'>
        <div  className='div-3-3'>
        <AirIcon/>
        <p>.../</p>
        <p>Wind Gusts</p>
        </div>
      </div>


      <div className='div-3'>
       <div className='div-3-3'  >
        <RemoveRedEyeIcon/>
        </div>
        <p>.../</p>
      <p>Visibilit</p>
      </div>
     </div>
        </div>
        
        
      </div>
</center>
} 

    



    </div> 

  );
}

export default Weather;
