const UI={
   Container:'Container',
   MovieDetailPage:'MovieDetailPage' 
}
const WrapperMovies=()=>{
    const[ui,setUI]=useState(UI.TeamListPage)
    return(
        <>
        {ui===UI.Container&&<Container next={()=>{
            setUI(UI.MovieDetailPage)

        }}/>}
        {ui===UI.MovieDetailPage&& <MovieDetailPage back={()=>setUI(UI.Container)}/>}
        </>
    )
}
export default WrapperMovies