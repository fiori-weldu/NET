import React, { useState,useEffect} from 'react'
import './Banner.css'
import axios from "../axios"
import request from "../request"
function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const req = await axios.get(request.fetchNetflixOriginals);
        setMovie(
          req.data.results[
            Math.floor(Math.random() * req.data.results.length)
          ]
        );
        return request;
      }
      fetchData();
    }, []);
    // console.log(movie)
    function truncateDescription(str, n) {
        if (str?.length > n)
        return str.substr(0, n - 1) + "...";
        else return str;
      }
    return (
            <div>
      <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncateDescription(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
    </div>
    )};

export default Banner;
