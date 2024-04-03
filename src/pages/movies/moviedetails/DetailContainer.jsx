const DetailContainer=({back})=>{
    const[movieDetails,setMovieDetails]=useState(null)
    useEffect(()=>{
        Promise.all([getMovies(),
        
        ])
    })
    return(
        <>
        <h1><span onclick={back}>Back</span></h1>
        </>
    )
}