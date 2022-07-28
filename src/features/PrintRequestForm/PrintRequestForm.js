import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPrintSize, setPrintSize, selectStatus, setRequest } from './printRequestFormSlice';
import { selectPrints, resetPrint } from '../Prints/printsSlice';
import { submitPrintRequest } from './printRequestFormSlice';
import styles from './Form.module.css';
import PrintRequestConfirmation from '../PrintRequestConfirmation/PrintRequestConfirmation';

// This component functions like a form, but is not a form. The individual elements dispatch actions to change state.

export default function PrintRequestForm() {

    // Hooks
    const dispatch = useDispatch();
    const prints = useSelector(selectPrints);
    const printSize = useSelector(selectPrintSize);
    const status = useSelector(selectStatus);
    const request = {
        prints: prints,
        printSize: printSize
    }

    // Sends selected print to state on change
    const handleChange = (e) => {
        e.preventDefault();
        dispatch(setPrintSize(e.target.value));
    };

    // Functions like a form 'submit' button
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(submitPrintRequest(request))
        dispatch(resetPrints());
        dispatch(setRequest(request));
    }
    
    // The following lines reset the prints form after 7 seconds.
    const select = document.querySelector('#printSize');
    const resetPrintsForm = () => {
        dispatch(setPrintSize(''));
        select.selectedIndex = 0;
        dispatch(resetPrint());
    }

    const resetPrints = () => {
        return () => {
            setTimeout(() => resetPrintsForm(), 2000)
        }
    }
    // 

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
                {/* Only able to see the submit button if printSize array is not populated */}
                {(printSize !== '') && <button onClick={handleClick} className={styles.submit}>Submit</button>}
            </div>
            {status === 'pending' ? <p>Sending...</p> : ''}
            <PrintRequestConfirmation />
        </div>
    )
}