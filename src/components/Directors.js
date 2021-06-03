import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsToDisplay = directors.map((director,index) => {
    return (
      <div key={index}>
        {director.name}
        <ul>
        {
          director.movies.map((movie,ind) => {
            return (
              <li key={ind}>{movie}</li>
            )
          })
        }
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsToDisplay}
    </div>
  );
}

export default Directors;
