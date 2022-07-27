import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPrintSize, setPrintSize, setFulfilled, selectStatus, setRequest } from './printRequestFormSlice';
import { selectPrints, resetPrint } from '../Prints/printsSlice';
import { submitPrintRequest } from './printRequestFormSlice';
import styles from './Form.module.css';
import PrintRequestConfirmation from '../PrintRequestConfirmation/PrintRequestConfirmation';
// This will be a form component that takes some user input data, packages this with the chosen image print array, and POST as an email to me.

export default function PrintRequestForm() {

    const dispatch = useDispatch();
    const prints = useSelector(selectPrints);
    const printSize = useSelector(selectPrintSize);
    const status = useSelector(selectStatus);
    const request = {
        prints: prints,
        printSize: printSize
    }

    const handleChange = (e) => {
        e.preventDefault();
        dispatch(setPrintSize(e.target.value));
    };

    const select = document.querySelector('#printSize');

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(submitPrintRequest(request))
        dispatch(resetPrints());
        // dispatch(setFulfilled());
        dispatch(setRequest(request));
    }

    const resetPrintsForm = () => {
        dispatch(setPrintSize(''));
        select.selectedIndex = 0;
        dispatch(resetPrint());
    }

    const resetPrints = () => {
        return () => {
            setTimeout(() => resetPrintsForm(), 7000)
        }
    }

    return (
        <div>
            <div className={styles.form}>
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
                {(printSize !== '') && <button onClick={handleClick} className={styles.submit}>Submit</button>}
            </div>
            {status === 'pending' ? <p>Sending...</p> : ''}
            <PrintRequestConfirmation />
        </div>
    )
}