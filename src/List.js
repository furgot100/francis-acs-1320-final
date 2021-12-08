import React from "react";
import Detail from "./detail";
import data from './metal.json';
import './list.css'


function Band() {

    const info = data.map(( { band_name, formed, origin, fans}, ID ) => {
        return (
            <Detail 
                id={ID}
                name={band_name}
                formed={formed}
                origin={origin}
                fans={fans}
            />
        )    
    })

    return (
        <div className="List">
          { info }  
        </div>
    )
}

function BandSplit() {
    
}

export default Band
