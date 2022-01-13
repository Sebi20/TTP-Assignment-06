import React,{useState} from 'react';

function ZipCities(){

  const [zip, setZip] = useState("")
  const [cities,setCities] = useState([])
  const [heading,setHeading] = useState("")

  function fetchCities(){
        fetch(`http://ctp-zip-api.herokuapp.com/zip/${zip}`)
          .then(response =>{
             if(!response.ok)alert('INVALID ZIP-CODE!')
             return response.json()})
          .then(data=>{setCities(data)
          setHeading("All cities associated with " + zip + " :")
          setZip("")})
          
  }

  const citiesList = cities.map(city=>
  <>
      <h1>{city.LocationText}</h1>
      <ul>
          <li>State: {city.State}</li>
          <li>Location: (Latitude: {city.Lat}, Longitude: {city.Long})</li>
          <li>Population (estimated): {city.EstimatedPopulation}</li>
          <li>Total Wages: ${city.TotalWages}</li>
      </ul>
  </>)
  return(
      
  <>
  <form onSubmit={(event)=>{event.preventDefault();fetchCities()}}>
      <label for="zipInput">Enter zip-code: </label>
      <input onChange={(event)=>setZip(event.target.value)}name="zipInput"value={zip}></input>
      <input type="submit" value="SUBMIT"></input>
  </form>
  <br></br><br></br>
  <h1>{heading}</h1>
  <ul>{citiesList}</ul>
  </>
  )
}
export {ZipCities}
