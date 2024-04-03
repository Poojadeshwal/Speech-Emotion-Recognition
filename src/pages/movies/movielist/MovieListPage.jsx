import { useEffect, useState } from "react";
import { getFunction } from "../../../services/movie/movies";


const filterMovies = (movies, searchObj) => {
    return movies.filter((movie) => {
        if (!searchObj || ((!searchObj.genre || movie.genres.includes(searchObj.genre)) && (!searchObj.language || movie.languages.includes(searchObj.language))))
            return true;
        return false
    })
};

const Movies = ({ searchObj, listUpdatedCount }) => {
    const [movies, setMovies] = useState(null);
    const [filteredMovies, setFilteredMovies] = useState(null);
    useEffect(() => {
        getFunction().then((movies) => {
            setMovies(movies)   
        })
    }, [listUpdatedCount]);
    useEffect(() => {
        if (searchObj && movies) {
            let filteredMovies = filterMovies(movies, searchObj);
            console.log("f1", filteredMovies);
            setFilteredMovies(filteredMovies);
        }  
    }, [movies, searchObj]);
    return (
        <>
            {filteredMovies && filteredMovies.map((movie, index) => (
                <Movie key={movie.movieId} movie={movie} index={index} />
            ))}
        </>
    )
};



const Movie = ({ movie, index }) => {
    return (
        <>
            
            <img src={movie.moviePoster} alt="Movie Poster" />
            <h1>{movie.movieName}</h1>
            <h3>{movie.genres +" "}</h3>
        </>
    )
}
export default Movies;










// import { useEffect, useState } from "react";
// import { getFunction } from "../../../services/movie/movies";


// const filterMovies = (movies, searchObj) => {
//     console.log("Inside Use effect 2-filtering")
//     return movies.filter((movie) => {
//         if (!searchObj || ((!searchObj.genre || movie.Genres.includes(searchObj.genre)) && (!searchObj.language || movie.Language.includes(searchObj.language))))
//             return true;
//         return false
//     })
// };

// const Movies = ({ searchObj, listUpdatedCount }) => {
//     const [movies, setMovies] = useState(null);
//     const [filteredMovies, setFilteredMovies] = useState(null);
//     console.log(searchObj);
//     console.log("insideMovies Component 1");
//     useEffect(() => {
//         console.log("Inside Use effect 1-1")
//         getFunction().then((movies) => {
//             console.log("Inside Use effect 1-get Promise")
//             setMovies(movies)   
//         })
//         console.log(movies)
//         console.log("Inside Use effect 1-2")
//     }, [listUpdatedCount]);
//     useEffect(() => {
//         console.log("Inside Use effect 2-1")
//         if (searchObj && movies) {
//             let filteredMovies = filterMovies(movies, searchObj);
//             console.log("f1", filteredMovies);
//             setFilteredMovies(filteredMovies);
//         }
//         console.log("Inside Use effect 2-2")
//     }, [movies, searchObj]);
//     console.log("Inside Movies Component 2")
//     return (
//         <>
//             {filteredMovies && filteredMovies.map((movie, index) => (
//                 <Movie key={movie.movieId} movie={movie} index={index} />
//             ))}
//         </>
//     )
// };



// const Movie = ({ movie, index }) => {
//     return (
//         <>
//             <h1>{movie.movieName}</h1>
//             <img src={movie.moviePoster} alt="Movie Poster" />
//             <h3>{movie.genres }</h3>
//         </>
//     )
// }
// export default Movies;
