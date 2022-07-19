import React, { useEffect, useState } from "react";
import "./HomePageContent.css";
import Row from "./Row/Row";

function HomePageContent() {
  // apiKey = "b6c39c10522e3d304a2188632faf52b9";
  //image path: https://image.tmdb.org/t/p/original

  //Popular Movies: https://api.themoviedb.org/3/movie/popular?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1
  //Now playing: https://api.themoviedb.org/3/movie/now_playing?api_key=b6c39c10522e3d304a2188632faf52b9&language=en-US&page=1

  const apikey = "b6c39c10522e3d304a2188632faf52b9";
  const BASE_URL = "https://api.themoviedb.org/3";

  const topRatedMoviesApiUrl = `${BASE_URL}/movie/top_rated?api_key=${apikey}&language=en-US&page=1`;
  const popularMoviesApiUrl = `${BASE_URL}/movie/popular?api_key=${apikey}&language=en-US&page=1`;
  const nowPlayingMoviesApiUrl = `${BASE_URL}/movie/now_playing?api_key=${apikey}&language=en-US&page=1`;

  const [TopRatedMovies, setTopratedMovies] = useState([]);
  const [PopularMovies, setPopularMovies] = useState([]);
  const [NowPlayingMovies, setNowPlayingMovies] = useState([]);

  function CallApi(url, setVariable) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVariable(data.results))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    CallApi(topRatedMoviesApiUrl, setTopratedMovies);
    CallApi(popularMoviesApiUrl, setPopularMovies);
    CallApi(nowPlayingMoviesApiUrl, setNowPlayingMovies);
  }, []);

  return (
    <div className="homepagecontent_container">
      {/* Adding a check i.e that is TopRatedMovies will only display when the legth of the data is greater than one.
  This is one in case an error occurs in an api and no data is fetched, Then in the browers, Top rated Movies heading
  will be printed but there will be no movies under it. Thats why this condition is added so that if by mistake no datais fetched i.element
  legth of array is 0, the heading will also not printed. */}
      {TopRatedMovies.length > 0 && (
        <Row
          rowTitle="Top Rated Movies"
          moviesArray={TopRatedMovies}
          posterPath={true} //if given false, it will show backdrop path
        />
      )}
      {PopularMovies.length > 0 && (
        <Row
          rowTitle="Popular Movies"
          moviesArray={PopularMovies}
          posterPath={true} //if given false, it will show backdrop path
        />
      )}

      {NowPlayingMovies.length > 0 && (
        <Row
          rowTitle="Now playing Movies"
          moviesArray={NowPlayingMovies}
          posterPath={true} //if given false, it will show backdrop path
        />
      )}

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
