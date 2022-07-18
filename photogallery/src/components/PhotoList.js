import React from "react";
import Photo from "./Photo";

const PhotoList = (props)=>{
    const results = props.data;
    let pictures = results.map(picture=>
            <Photo url ={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} key={picture.id} />
            )
        return(
            <div className="photo-container">
            <h2>Results</h2>
            <ul>
            {pictures}
            </ul>

            </div>
        )
    }

export default PhotoList;
