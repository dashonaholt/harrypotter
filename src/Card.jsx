import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.image} alt={props.name}/>
      <div className="card-name">{props.name}</div>
      <div>
      <p>
        <strong>Gender: </strong>
        {props.gender}
      </p>
      </div>
      <div>
      <p>
        <strong>Species: </strong>
        {props.species}
      </p>
      </div>
      {props.wand && (
        <div>
          <p>
            <strong>Wand Properties:</strong> 
            wood: {props.wand.wood || "N/A"},
            core: {props.wand.core || "N/A"}, 
            length: {props.wand.length || "N/A"} 
          </p>
        </div>
      )}
      <div>
        <p>
          <strong>Ancestry:</strong> {props.ancestry}
        </p>
      </div>
      <div>
        <p>
          <strong>House:</strong> {props.house}
        </p>
      </div>
      <div>
        <p>
          <strong>Patronus: </strong>
          {props.patronus ? props.patronus : "N/A"}
        </p>
      </div>
    </div>
  );
}
