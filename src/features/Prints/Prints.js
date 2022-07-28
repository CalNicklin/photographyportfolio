import React from "react";
import { removePrint } from "./printsSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectPrints } from "./printsSlice";
import Modal from "../Modal/Modal";
import { openModal, setSrc } from "../Modal/modalSlice";
import { Link } from "react-router-dom";
import PrintRequestForm from '../PrintRequestForm/PrintRequestForm';
import styles from './Prints.module.css';
import PrintRequestConfirmation from "../PrintRequestConfirmation/PrintRequestConfirmation";

export default function Prints() {

    // Hooks
    const prints = useSelector(selectPrints);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        // This event triggers the modal to open and sets the image src attritbutes to that of a specified file in the store
        // accessed via printsSlice.js
        dispatch(openModal());
        dispatch(setSrc(event.target.src));
    };

    const removeFromPrints = (event) => {
        dispatch(removePrint(event.target.value))
    };

    // use of ternary operator works because prints.length is an array with initial state of 0, which evaluates to falsy.
    return prints.length ? (
        <div>
            <div>
                <Modal />
                <div className='gallery'>
                    {prints.map((print, index) => {
                        return (
                            <div
                                key={index}
                                className={styles.parent}
                            >
                                <img
                                    src={print}
                                    onClick={handleClick}
                                />
                                <button
                                    onClick={removeFromPrints}
                                    value={print}
                                    className={styles.child}
                                >
                                    Remove
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <PrintRequestForm />
        </div>
    ) : 
    <div>
        <p>You can request prints of your favorite images within each <Link to='/projects'>project</Link> page.</p>
        <PrintRequestConfirmation />
    </div>
}