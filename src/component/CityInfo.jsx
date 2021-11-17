import React, { useState } from 'react'  
import useLocationData from '../hook/useLocationData'

import Form from './Form'

function CityInfo() {  

const {cityName,cityDeatls,setCityName} = useLocationData() 
const[show,setShow] = useState(false)  



 const cityNameHandler = (e) => {
     

     setCityName(e.target.value) 
 }




 const SubmitHandler =  (e) => {
    
    e.preventDefault() 

     setShow(true)   
 }


 const mapurl = `https://maps.locationiq.com/v3/staticmap?
 key=${process.env.REACT_APP_LOCATIONANDMAPIQ_KEY}&center=${cityDeatls.lat},${cityDeatls.lon}
 &zoom=13&size=400x400&format=jpeg` 




    return (
        <div> 

      <Form  
       cityName={cityName}  
       cityDeatls={cityDeatls} 
        setCityName={setCityName} 
        cityNameHandler={cityNameHandler}
        SubmitHandler={SubmitHandler}  
        show={show}
        />  

          <> 
          {show && <img src={mapurl}
         alt="city map which search it" /> } 
         </>
    

        </div> 

            
    )
}

export default CityInfo
