import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsToShow = actors.map((actor,index) => {
    return (
      <div key={index}>
        {actor.name}
          <ul>
        {
          actor.movies.map((movie,ind) => {
            return (
              <li key={ind}>
                {movie}
              </li>
            )
          })
        }
          </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsToShow}
    </div>
  );
}

export default Actors;
