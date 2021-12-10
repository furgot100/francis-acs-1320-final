import React from "react";
import './detail.css'
import Like from "./counter";

function Detail(props) {
    const { name, fans, formed, origin,split} = props
    if (props.split === '-') {
        return(
            <div className="Detail">
                <h1>{name}</h1>
                <p>Country: {origin}</p>
                <p>Formed: {formed}</p>
                <p>Fans: {fans}</p>
                <Like />
    
            </div>
        )
    } else {
        return(
            <div className="Detail">
                <h1>{name}</h1>
                <p>Country: {origin}</p>
                <p>Formed: {formed}</p>
                <p>Fans: {fans}</p>
                <p>Split: {split}</p>
    
            </div>
        )

    }
}

export default Detail