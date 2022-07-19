import React from "react";
import "./Row.css";

function Row({ rowTitle, moviesArray, posterPath }) {
  return (
    <div className="row_container">
      <p className="row_container_title">{rowTitle}</p>
      <div className="movies_row_container">
        {moviesArray.map((value, key) => (
          <div className="movies_rows">
            <img
              // src={`https://image.tmdb.org/t/p/original${poster_path ? value.poster_path : value.backdrop_path }`}
              // https://image.tmdb.org/t/p/original${value.poster_path}
              //  :https://image.tmdb.org/t/p/original${value.backdrop_path}
              src={
                posterPath
                  ? `https://image.tmdb.org/t/p/original${value.poster_path}`
                  : `https://image.tmdb.org/t/p/original${value.backdrop_path}`
              }
              alt={`${rowTitle}Img`}
            />
            <p>{value.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
