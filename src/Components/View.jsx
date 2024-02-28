import React, { useEffect } from "react";
import { Favorite, mostView } from "../Details/Data";
import context from "./Search";

import "../App.css";

export default function View() {
  useEffect(() => {
    Favorite;
    mostView;
  }, []);

  return (
    <div className="mt-10 mx-1">
      <h1 className="font-bold text-blue text-2xl mx-3">Popular Shows</h1>
      {mostView && (
        <div className="flex flex-row overflow-x-scroll overflow-y-hidden  ">
          {mostView.map((movie) => (
            <div key={movie.imdbID} className="flex-shrink-0">
              <img
                className="rounded-lg p-2 w-44 h-64 imgCss imgCss"
                src={movie.Poster}
                alt={movie.Title}
              />
              <div className="w-40">
                <h1 className="font-bold text-base">{movie.Title}</h1>
                <p>{movie.Year}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <h1 className="font-bold text-blue text-2xl mx-3 mt-10">Favorite</h1>
      {Favorite && (
        <div className="flex flex-row overflow-x-scroll overflow-y-hidden  ">
          {Favorite.map((movie) => (
            <div key={movie.imdbID} className="flex-shrink-0">
              <img
                className="rounded-lg p-2 w-44 h-64 imgCss"
                src={movie.Poster}
                alt={movie.Title}
              />
              <div className="w-40">
                <h1 className="font-bold text-base">{movie.Title}</h1>
                <p>{movie.Year}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
