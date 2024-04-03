const Movies=({movies})=>{
    console.log(movies);
    return (
        <>
        <h1>Movie</h1>
        <div>
            {movies.map((movies,index)=><Movie key={movies.id} movie={movie} index={index}/>)}
        </div>
        </>
    )
}
const Movie=({movie,index})=>{
    console.log(movie)
    return(
        <div>
            <h1>{movie.movieName}</h1>
            <img src={movie.moviePoster} alt={movie.movieName}/>
        </div>
    )
}
export default Movies