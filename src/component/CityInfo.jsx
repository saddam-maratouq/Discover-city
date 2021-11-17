import axios from 'axios'
import React, { useState,useEffect } from 'react'  



function CityInfo() { 


const [cityName,setCityName] = useState('') 

const[cityDeatls,setCityDeatls] = useState([])  

const[show,setShow] = useState(false)




 const cityNameHandler = (e) => {
     

     setCityName(e.target.value) 
 }


  useEffect(() => { 

     const SearchCity = async () => {  


         const cityReq =  await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONANDMAPIQ_KEY}&q=${cityName}&format=json`) 

        //  console.log(cityReq.data[0]);   

         setCityDeatls(cityReq.data[0]) 
        
        
     }   


     
     
     
     const time = setTimeout(() => {
         
         if(cityName.length) {
            SearchCity(); 
        }  

        else if (!cityName.length) {

            setCityDeatls('') 

        }
   
     }, 2000);  

     return () => clearTimeout(time) 
     
    
  }, [cityName])



 const SubmitHandler =  (e) => {
    
    e.preventDefault() 

     setShow(true)   
 }


 const mapurl = `https://maps.locationiq.com/v3/staticmap?
 key=${process.env.REACT_APP_LOCATIONANDMAPIQ_KEY}&center=${cityDeatls.lat},${cityDeatls.lon}
 &zoom=13&size=450x450&format=jpeg` 




    return (
        <div> 

            <map name=""></map>

            <h1> Discover City   🧐✈️  </h1> 
            <br />
         
        <form  >

          <input type="text"  placeholder='Type city' value={cityName} onChange={cityNameHandler}/> 

          <button onClick={SubmitHandler} > Search  </button> 
          </form>

          {show && <h3>  longitude :   {cityDeatls.lat}   /   latitude :  {cityDeatls.lon} </h3>  }
          {show   && <h2> {cityName} </h2> }  

      <div>
          {show && <img src={mapurl}
         alt="city map which search it" /> } 

      </div>

        </div> 

            
    )
}

export default CityInfo
