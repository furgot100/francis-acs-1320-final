import React, { useState} from "react";


function Like() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Likes {count}</p>
            <button onClick= {()=> setCount(count + 1)}>
                👍
            </button>
            <button onClick= {() => setCount(count - 1)}>
                👎
            </button>
        </div>
    )
}

export default Like