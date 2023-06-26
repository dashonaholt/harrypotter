
import React, { useState, useEffect } from "react"
import Card from "../Card";

export default function Staff() {
const [staff, setStaff] = useState([]); //created a state variable called characters initialized it to an empty array

useEffect(() => { 
  async function fetchStaff() {
    const response = await fetch('https://hp-api.onrender.com/api/characters/');
    const data = await response.json();
    setStaff(data);
  }
  fetchStaff();
}, []);

// using the find method to filter the characters array by name and only look for important characters
const minerva = staff.find(c => c.name === 'Minerva McGonagall');
const rubeus = staff.find(c => c.name === 'Rubeus Hagrid');
const horace = staff.find(c => c.name === 'Horace Slughorn');
const severus = staff.find(c => c.name === 'Severus Snape');



//returning the characters and the images of the specific characters
return (
    <div className='FourthLink'>
      {minerva && <Card 
      image={minerva.image} 
      name="Minerva McGonagall" 
      wand={minerva.wand} 
      ancestry={minerva.ancestry} 
      house={minerva.house}
      patronus={minerva.patronus}
      species={minerva.species}  
      gender={minerva.gender}
      />}
      {rubeus && <Card 
      image={rubeus.image} 
      name="Rubeus Hagrid"
      wand={rubeus.wand} 
      ancestry={rubeus.ancestry} 
      house={rubeus.house}
      patronus={rubeus.patronus}
      species={rubeus.species}  
      gender={rubeus.gender} 
      />}
      {horace && <Card 
      image={horace.image} 
      name="Horace Slughorn" 
      wand={horace.wand} 
      ancestry={horace.ancestry} 
      house={horace.house}
      patronus={horace.patronus}
      species={horace.species}  
      gender={horace.gender}
      />}
      {severus && <Card 
      image={severus.image} 
      name="Severus Snape"
      wand={severus.wand} 
      ancestry={severus.ancestry} 
      house={severus.house}
      patronus={severus.patronus}
      species={severus.species}  
      gender={severus.gender} 
      />}
      </div>
  );
  
}
