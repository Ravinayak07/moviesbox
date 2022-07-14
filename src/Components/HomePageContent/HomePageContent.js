import React, { useEffect, useState } from "react";
import "./HomePageContent.css";
import Row from "./Row/Row";

function HomePageContent() {
  // apiKey = "b6c39c10522e3d304a2188632faf52b9";
  //image path: https://image.tmdb.org/t/p/original

  const [TopRatedMovies, setTopratedMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setTopratedMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="homepagecontent_container">

      <Row 
      rowTitle = "Top Rated Movies"
      moviesArray = {TopRatedMovies}
      imagePath = "poster_path"
      />
      {/* <div className="row_container">
        <p className="row_container_title">Top Rated Movies</p>
        <div className="movies_row_container">
          {TopRatedMovies.map((value, key) => (
            <div className="movies_rows">
              <img
                src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
              />
              <p>{value.title}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default HomePageContent;
