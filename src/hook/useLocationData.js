import  { useState,useEffect } from 'react'  
import axios from 'axios'



function useLocationData() { 


    const [cityName,setCityName] = useState('') 

    const[cityDeatls,setCityDeatls] = useState([])   


  useEffect(() => {
    const SearchCity = async () => {
      const cityReq = await axios.get(
        `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONANDMAPIQ_KEY}&q=${cityName}&format=json`
      );

      //  console.log(cityReq.data[0]);

      setCityDeatls(cityReq.data[0]);
    };

    const time = setTimeout(() => {
      if (cityName.length) {
        SearchCity();
      } else {
        setCityDeatls("");
      }
    }, 2000);

    return () => clearTimeout(time); 
  }, [cityName]); 

  return {cityName,cityDeatls,setCityName} 
}

export default useLocationData;
