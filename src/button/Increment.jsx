import React, { useState } from 'react'

function Increment() {
    const [num, setNum] = useState(0)
    const increment = () => {
        setNum(num + 1);
        console.log(num)
    }
    const decrement = () => {

        num <= 0 ? alert("SORRY! You Can Not Go below 0") : setNum(num - 1)


        console.log(num)

    }
    return (
        <>
            <div className="container">
                <div className="con_data">
                    <h1>{num}</h1>
                    <button title='Increase' onClick={increment}>INCREMENT</button>
                    <button title='Decrease' onClick={decrement}>DECREMENT</button>
                </div>
            </div>

        </>
    )
}

export default Increment