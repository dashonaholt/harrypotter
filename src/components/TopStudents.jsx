import React, { useState, useEffect } from "react"
import Card from "../Card";


export default function TopStudents() {
const [characters, setCharacters] = useState([]); //created a state variable called characters initialized it to an empty array

useEffect(() => { 
  async function fetchCharacters() {
    const response = await fetch('https://hp-api.onrender.com/api/characters/');
    const data = await response.json();
    setCharacters(data);
  }
  fetchCharacters();
}, []);

// using the find method to filter the characters array by name and only look for important characters
const harry = characters.find(c => c.name === 'Harry Potter');
const hermione = characters.find(c => c.name === 'Hermione Granger');
const ron = characters.find(c => c.name === 'Ron Weasley');
const draco = characters.find(c => c.name === 'Draco Malfoy');

//returning the characters and the images of the specific characters
return (
  <div className='ThirdLink'>
    {harry && <Card 
    image={harry.image} 
    name="Harry Potter" 
    wand={harry.wand} 
    ancestry={harry.ancestry} 
    house={harry.house}
    patronus={harry.patronus}
    species={harry.species} 
    gender={harry.gender}
    
    />}
    {hermione && <Card  
    image={hermione.image} 
    name="Hermione Granger" 
    wand={hermione.wand} 
    ancestry={hermione.ancestry} 
    house={hermione.house}
    patronus={hermione.patronus}
    species={hermione.species}  
    gender={hermione.gender}
    />}
    {ron && <Card 
    image={ron.image} 
    name="Ron Weasley" 
    wand={ron.wand} 
    ancestry={ron.ancestry}
    house={ron.house}
    patronus={ron.patronus} 
    species={ron.species} 
    gender={ron.gender}
    /> }
    {draco && <Card  
    image={draco.image} 
    name="Draco Malfoy"
    wand={draco.wand} 
    ancestry={draco.ancestry}
    house={draco.house}
    species={draco.species}
    gender={draco.gender} 
    />}
  </div>
);
}




