import React, { useState } from "react"
import * as HomeTypes from "./interface"

function Home() {
    let [count, setCount] = useState<HomeTypes.countType>(1)
    return(
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(++count)}>加 1 </button>
        </div>
        
    )
}

export default Home
