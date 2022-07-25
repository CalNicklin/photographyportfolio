import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPrintSize, setPrintSize, selectFulfilled, setFulfilled } from './printRequestFormSlice';
import { selectPrints } from '../Prints/printsSlice';
import { submitPrintRequest } from './printRequestFormSlice';

// This will be a form component that takes some user input data, packages this with the chosen image print array, and POST as an email to me.

export default function PrintRequestForm() {

    const dispatch = useDispatch();
    const prints = useSelector(selectPrints);
    const printSize = useSelector(selectPrintSize);
    const fulfilled = useSelector(selectFulfilled)
    const request = {
        prints: prints,
        printSize: printSize
    }

    const handleChange = (e) => {
        e.preventDefault();
        dispatch(setPrintSize(e.target.value));
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(submitPrintRequest(request))
        dispatch(resetFulfilled());
    };

    const resetFulfilled = () => {
        return async => {
            setTimeout(() => dispatch(setFulfilled()), 7000)
        }
    } 

    return (
        <div>
            <div>
                <select
                    id='printSize'
                    type="text"
                    placeholder="What print size?"
                    onChange={handleChange}
                >
                    <option value=''>Please choose a print size</option>
                    <option value='5 X 4'>5 X 4</option>
                    <option value='7 X 5'>7 X 5</option>
                </select>
                <button onClick={handleClick}>Submit</button>
            </div>
            {fulfilled ? <p>Success</p> : ''}
        </div>

    )
}