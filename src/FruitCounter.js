import React from "react";

function FruitCounter({emoji, fruitTitle, fruitName, setFruitCount, fruitCount}) {
    return (
        <div className={fruitCount > 0 ? "counterCardFilled" : "counterCard"}>
            <h2 className="fruitTitle">{emoji} {fruitTitle} {emoji}</h2>
            <div className="counterButtons">
                <button className={fruitCount > 0 ? "fruitButtonFilled" : "fruitButton"}
                    type="button"
                    onClick={() => setFruitCount(fruitCount - 1)}
                    name={fruitName}
                    disabled={fruitCount === 0}
                >
                    -1
                </button>

                <p className="fruitCount">{fruitCount}</p>

                <button className={fruitCount > 0 ? "fruitButtonFilled" : "fruitButton"}
                    type="button"
                    onClick={() => setFruitCount(fruitCount + 1)}
                    name={fruitName}
                >
                    +1
                </button>
            </div>
        </div>
    )
}

export default FruitCounter;