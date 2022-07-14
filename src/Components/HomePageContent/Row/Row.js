import React from "react";
import "./Row.css";

function Row({rowTitle, moviesArray, imagePath}) {
    return(
   
        <div className="row_container">
          <p className="row_container_title">{rowTitle}</p>
          <div className="movies_row_container">
            {moviesArray.map((value, key) => (
              <div className="movies_rows">
                <img
                  src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                  alt={`${imagePath}Img`}
                />
                <p>{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      
    )
}

export default Row;
