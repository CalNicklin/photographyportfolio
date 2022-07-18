import React from "react";
import { removePrint } from "./printsSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectPrints } from "./printsSlice";

export default function Prints () {

    const prints = useSelector(selectPrints);
    const dispatch = useDispatch();

    const removeFromPrints = (event) => {
        dispatch(removePrint(event.target.value))
    }

    return (
        <div>
            {prints.map((print, index) => {
                return(
                    <div>
                        <img 
                            src={print} 
                            key={index}
                        />
                        <button onClick={removeFromPrints} value={print}>Remove this photo</button>
                    </div>
                )
            })}
        </div>
    )
}