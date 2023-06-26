import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../assets/Maskgroup.png";

export default function HouseList() {
  useEffect(() => {
    axios
      .get("https://hp-api.onrender.com/api/characters/")
      .then((response) => {
        setNames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [names, setNames] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const filteredNames = selectedHouse
    ? names.filter((item) => item.house.includes(selectedHouse))
    : null;

  return (
    <>
      <ul className="SecondLink" style={{ display: "flex", flexDirection: "row" }}>
        <li className="house" onClick={() => setSelectedHouse("Ravenclaw")}>
          <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fharrypotter%2Fimages%2F7%2F71%2FRavenclaw_ClearBG.png%2Frevision%2Flatest%2Fthumbnail%2Fwidth%2F360%2Fheight%2F360%3Fcb%3D20161020182442" alt="Ravenclaw" />
          <p className="house-name">Ravenclaw</p>
        </li>
        <li className="house" onClick={() => setSelectedHouse("Slytherin")}>
          <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fpotter-dictionary%2Fimages%2F4%2F45%2FSlytherin_Crest.png%2Frevision%2Flatest%3Fcb%3D20131005003705" alt="Slytherin" />
          <p className="house-name">Slytherin</p>
        </li>
        <li className="house" onClick={() => setSelectedHouse("Gryffindor")}>
          <img src={Logo} alt="Gryffindor" />
          <p className="house-name">Gryffindor</p>
        </li>
        <li className="house" onClick={() => setSelectedHouse("Hufflepuff")}>
          <img src="https://i.pinimg.com/originals/93/d8/42/93d8425dbc28c88332d929dc25493138.png" alt="Hufflepuff" />
          <p className="house-name">Hufflepuff</p>
        </li>
      </ul>

      <div className="filtered-names">
        {filteredNames?.map((item, index) => (
          <p key={index} className="centered">
            {item.name}
          </p>
        ))}
      </div>
    </>
  );
}
