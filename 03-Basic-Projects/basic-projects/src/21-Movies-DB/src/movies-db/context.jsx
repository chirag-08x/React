import React, { useState, useContext, useEffect } from "react";
import useFetch from "./useFetch";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { loading, movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        loading,
        movies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

// const [searchTerm, setSearchTerm] = useState("mughal");
// const [loading, setLoading] = useState(false);
// const [movies, setMovies] = useState([]);

// const fetchMovies = async () => {
//   if (searchTerm) {
//     setLoading(true);
//     try {
//       const url = `${API_ENDPOINT}&s=${searchTerm}`;
//       const response = await fetch(url);
//       const data = await response.json();
//       if (data.Response === "True") {
//         console.log(data);
//         setLoading(false);
//         setMovies(data.Search);
//         lastData = data.Search;
//       } else {
//         setLoading(false);
//         setMovies(lastData);
//       }
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   }
// };

// useEffect(() => {
//   fetchMovies();
// }, [searchTerm]);
