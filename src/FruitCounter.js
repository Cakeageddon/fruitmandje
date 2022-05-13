import React from "react";

function FruitCounter({ emoji, fruitTitle, fruitName, setFruitCount, fruitCount }) {
    return (
        <div className="counterCard">
            <h2>{emoji} {fruitTitle} {emoji}</h2>
            <button
                type="button"
                onClick={() => setFruitCount(fruitCount - 1)}
                name={fruitName}
                disabled={fruitCount === 0}
            >
                -1
            </button>

            <p>{fruitCount}</p>

            <button
                type="button"
                onClick={() => setFruitCount(fruitCount + 1)}
                name={fruitName}
            >
                +1
            </button>
        </div>
    )
}

export default FruitCounter;