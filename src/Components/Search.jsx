import React from "react";
import axios from "axios";
import { useState, createContext } from "react";
import "../App.css";

const context = createContext();
export default function Search() {
  const [data, setData] = useState({});
  const [value, setValue] = useState("");

  const movieList = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${value}&apikey=55675d05`
      );

      if (response.data.Response === "True") {
        setData(response.data);
        console.log(data);
      } else {
        alert("No movies found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className=" ">
      <context.Provider value={{ data: data }}>
        <div className="flex flex-row items-center justify-center">
          <input
            type="text"
            onChange={getValue}
            className="rounded-md mt-5 px-4 border-2 w-72 border-gray transition-all duration-500 "
          />
          <button
            onClick={movieList}
            className=" ml-4 text-center  rounded-md font-bold hover:bg-textHover text-xl mt-4 px-5  hover:text-black hover:font-bold transition-all duration-200 ease-in-out "
          >
            Search
          </button>
        </div>
        <div>
          {data && data.Search && (
            <div>
              <h1 className="font-bold text-blue text-2xl mx-3 mt-8">
                Top Results
              </h1>
              <div className="flex flex-row overflow-x-scroll overflow-y-hidden  ">
                {data.Search.map((movie) => (
                  <div key={movie.imdbID} className="flex-shrink-0">
                    <img
                      className="rounded-lg p-2 w-44 h-64 mgCss"
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
            </div>
          )}
        </div>
      </context.Provider>
    </div>
  );
}
