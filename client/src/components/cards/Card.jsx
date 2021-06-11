import React from "react";


export default function Card({ rating, plataforms, description, name, id, genres }) {
  return (
    <div >
      <div >
        <button>
          X
        </button>
      </div>
      <div >
        {/* <Link to={`/ciudad/${id}`}> */}
          <h5>{name}</h5>
        
        <div >
          <div >
            <p>Min</p>
            <p>{description}</p>
          </div>
          <div>
            <p>Max</p>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
