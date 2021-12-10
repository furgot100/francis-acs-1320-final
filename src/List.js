import React from "react";
import Detail from "./detail";
import data from './metal.json';
import './list.css'


function Band() {

    const info = data.map(( { band_name, formed, origin, fans,split}, ID ) => {
        return (
            <Detail 
                id={ID}
                name={band_name}
                formed={formed}
                origin={origin}
                fans={fans}
                split={split}
            />
        )    
    })

    return (
        <div className="List">
          { info }  
        </div>
    )
}

export default Band
