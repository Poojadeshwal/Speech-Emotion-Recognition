import React from "react";
const genres=["Action","Sci-Fi","Thriller","Animation","Comedy","Adventure"]
const languages=["Hindi","English","Tamil","Telugu"]
export default function Filters({searchObj,setSearchObj}){
    return(
        <div>
            <div>
                {genres.map((genre,index)=>(
                    <button
                    key={index}
                    onClick={(e)=>{
                        let genre=e.target.textContent;
                        console.log("button object",genre);
                        if(searchObj.genre===genre){
                            setSearchObj({...searchObj,genre:null})
                        }
                        else{
                            setSearchObj({...searchObj,genre})
                        }
                      

                    }}>
                        {genre}
                        </button>
                ))}
            </div>
            <div>
            {languages.map((language,index)=>(
                    <button
                    key={index}
                    onClick={(e)=>{
                        let language=e.target.textContent;
                        console.log("button object",language);
                        if(searchObj.language===language){
                            setSearchObj({...searchObj,language:null})
                        }
                        else{
                            setSearchObj({...searchObj,language})
                        }
                    }}>
                        {language}
                        </button>
                ))}
            </div>
        </div>
    )
}