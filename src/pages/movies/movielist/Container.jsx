import { useState } from "react";
import Movies from "./MovieListPage";
import Filters from "./FilterMovie";

export default function Container(){
    const[searchObj,setSearchObj]=useState({});
    const[listUpdatedCount,setListUpdatedCount]=useState(null);
    // console.log("Container");
    return (
        <>
        <Filters searchObj={searchObj} setSearchObj={setSearchObj}/>
        <Movies searchObj={searchObj} listUpdatedCount={listUpdatedCount}/>
        </>
    )
}