import React from "react";
import { movies } from "../data";

function Movies() {
  const movieTitleToDisplay = movies.map((movie,index) => {
    return (
      <div key={index}>
        {movie.title}, {movie.time}
        <ul>
          {
            movie.genres.map((genre,ind) => {
              return (
                <li key={ind}>{genre}</li>
              )
            })
          }
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {movieTitleToDisplay}
    </div>  
  );
}

export default Movies;
