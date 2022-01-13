import React, { useState } from 'react';

function CityZips(){
    const [city, setCity] = useState("")
    const [cityZips,setZips] = useState([])
    const [heading,setHeading] = useState("")
    function fetchCityZips(){
        fetch(`http://ctp-zip-api.herokuapp.com/city/${city.toUpperCase()}`)
        .then(response =>{
          if(!response.ok)alert('INVALID CITY!')
          return response.json()})
            .then(data=>{setZips(data)
            setHeading("All zip-codes associated with " + city.toUpperCase() + " :")
            setCity("")})
    }


    const zips = cityZips.map(zip=><li>{zip}</li>)
    
    return(
        
    <>
    <form onSubmit={(event)=>{event.preventDefault();fetchCityZips()}}>
      <label for="cityInput">Enter city: </label>
      <input onChange={(event)=>setCity(event.target.value)}name="cityInput"value={city}></input>
      <input type="submit" value="SUBMIT"></input>
    </form>
    <br></br><br></br>
    <h1>{heading}</h1>
    <ul>{zips}</ul>
    </>
    )
}
export {CityZips}