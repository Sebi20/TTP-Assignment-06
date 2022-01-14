import React, { useState } from 'react';

function CityZips(){
    const [city, setCity] = useState("")
    const [myList,setList] = useState([])
    const [heading,setHeading] = useState("")
    function fetchCityZips(){
        fetch(`http://ctp-zip-api.herokuapp.com/city/${city.toUpperCase()}`)
        .then(response =>{
          if(!response.ok)alert('INVALID CITY!')
          return response.json()})
            .then(data=>{createList(data.sort())
            setHeading("All zip-codes associated with " + city.toUpperCase() + " :")
            setCity("")})
    }
    async function createList(zips){
      setList([])
      let temp = null
      for(let zip of zips)
      {
        await fetch(`http://ctp-zip-api.herokuapp.com/zip/${zip}`)
        .then(response => response.json())
          .then(data=>{
            if(temp&&temp===data[0].State)
            {setList(oldArr => [...oldArr,<li>{zip} || State: {data[0].State} || Population(estimated): {data[0].EstimatedPopulation?data[0].EstimatedPopulation:"N/A"}</li>])}
            else{setList(oldArr => [...oldArr,<><br></br><br></br><h3>Zip-codes from {data[0].State}: </h3><li>{zip} || State: {data[0].State} || Population(estimated): {data[0].EstimatedPopulation?data[0].EstimatedPopulation:"N/A"}</li></>])}
            temp = data[0].State
          })
      }
    }


    return(<>
    <form onSubmit={(event)=>{event.preventDefault();fetchCityZips()}}>
      <label>Enter city: </label>
      <input onChange={(event)=>setCity(event.target.value)}name="cityInput"value={city}></input>
      <input type="submit" value="SUBMIT"></input>
    </form>
    <br></br><br></br>
    <h1>{heading}</h1>
    <ul>{myList}</ul>
    </>
    )
}
export {CityZips}