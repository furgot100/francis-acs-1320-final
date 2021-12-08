import React from "react";
import './detail.css'
import Like from "./counter";

function Detail(props) {
    const { name, fans, formed, origin} = props
    return(
        <div className="Detail">
            <h1>{name}</h1>
            <p>Country: {origin}</p>
            <p>Formed: {formed}</p>
            <p>Fans: {fans}</p>
            <Like />

        </div>
    )
}

export default Detail