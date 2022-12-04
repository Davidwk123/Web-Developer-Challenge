import React, { useEffect, useState }  from 'react';
import "./App.css"

function App() {

  // Assigning data
  const [data, setData] = useState("Loeadinhggggggggggggggg") //"useState" calls the "useEffect" hook 
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
  // console.log(fishPhoto);
  /* <img src={fishPhoto[0]} alt={fishPhoto[1]}></img> */
  return (
    <div className='App'>
      <header>
      Hello World
      </header>
    </div>
 
  );
};

export default App;
