import React, { useState, useEffect } from "react";
import instance from "./axios";
import requests from "./request";
import "./Banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h2 className="banner_title">
          {movies?.title || movies?.name || movies?.original_name}
        </h2>
        <div className="banner_button">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1 className="banner_description">{movies?.overview}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
