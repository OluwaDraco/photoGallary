import React from "react";
import Photo from "./Photo";
import NoResults from "./NoResults"
import { useParams } from 'react-router-dom';


const PhotoList = (props)=>{
    const results = props.data;
    let title;
    let url = useParams().query
    let pictures;

    if(results.length > 0){
        title = `"${url}"`
        pictures = results.map(picture=>
            <Photo url ={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} key={picture.id} />)
    }

    else{
        <NoResults />
    }    
        return(
            <div className="photo-container">
            <h2>{title}</h2>
            <ul>
            {pictures}
            </ul>

            </div>
        )
    }

export default PhotoList;
