import React, { useEffect, useState }  from 'react';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // Font-Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css"

function App() {

  // Assigning data
  const [data, setData] = useState() //"useState" calls the "useEffect" hook 
  // Possible create a hook object based off the users search 
  // Processes data from link
  useEffect(() => {
    const url = "https://www.fishwatch.gov/api/species"

    const fetchData = async () => {
      
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setData(json);
    }
    fetchData();
  }, []);

  // Testing to see if collection of json data works
  // const fishData = data[0]["Species Illustration Photo"] //2d array of fish 
  // const fishPhoto = []

  // for (let i in fishData)
  //   fishPhoto.push(fishData[i]);
  
  // Testing to see how to index array of json data from API
  if(data)  // FIXED: Needed to have a check for the data because of useState()
  // UseState() first render is empty so calling this would give the "undefined" error 
    console.log(data[100]["Species Name"]);
   
  /* <img src={fishPhoto[0]} alt={fishPhoto[1]}></img> */
  return (
    <div className='App'>
      <br></br>

      <header>
        <h1>Web Developer Challenge</h1>

        <br></br>
        <br></br>
        {/* Search Bar*/}
        <form class="Searchbar" >
          <input type="text" placeholder="Search.." name="search"></input>
          <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
        
      </header>

      <br></br>
      <br></br>

      <section>
        {/* API result info after search:  Species Name, Species Photo, Biology, Habitat  */}
        <p1> test </p1>
      </section>
    </div>
 
  );
};

export default App;
