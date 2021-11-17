

import React from 'react'

const Form = ({cityName,cityDeatls,cityNameHandler,SubmitHandler,show}) => { 
    return (
        
        <div>
        <h1> Discover City and Streets  🧐✈️  </h1>  
            <br />
            
            <form  >
    
            <input type="text"  placeholder='Type city' value={cityName} onChange={cityNameHandler}/> 
    
            <button onClick={SubmitHandler} > Search  </button> 
    
            </form>
    
            {show && <h3>  longitude :   {cityDeatls.lat}   /   latitude :  {cityDeatls.lon} </h3>  }
            {show   && <h2> {cityName} </h2> }  
        
               </div>
    ) 
}

export default Form





