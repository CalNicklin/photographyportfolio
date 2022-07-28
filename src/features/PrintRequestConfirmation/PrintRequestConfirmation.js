import React from 'react';
import { useSelector } from 'react-redux';
import { selectRequest, selectFulfilled } from '../PrintRequestForm/printRequestFormSlice';
import styles from './Printconfirmation.module.css'

// An array of images that shows the user what they have already requested to print

export default function PrintRequestConfirmation() {
    
    // Hooks
    // Fulfilled is 'true' when a request has been made. Ternary operator governs the appearance based on this.
    const fulfilled = useSelector(selectFulfilled);
    // The array of images requested to be printed
    const requestArr = useSelector(selectRequest);

    // Ternary operator shows content as indicated above (ln.10)
    return fulfilled ? (
        <div className={styles.confirmationGallery}>
            <p className={styles.confirmationGallery}>So far you've requested these prints:</p>
            {requestArr.map((print, index) => {
                return (<img key={index} src={print} alt='by c.nicklin' className={styles.img} />)
            })}
        </div>
    ) : ''
}
