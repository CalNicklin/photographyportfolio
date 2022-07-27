import React from 'react';
import { useSelector } from 'react-redux';
import { selectRequest, selectFulfilled } from '../PrintRequestForm/printRequestFormSlice';
import styles from './Printconfirmation.module.css'

export default function PrintRequestConfirmation() {

    const fulfilled = useSelector(selectFulfilled);
    const requestArr = useSelector(selectRequest);

    return fulfilled ? (
        <div className={styles.confirmationGallery}>
            <p className={styles.confirmationGallery}>So far you've requested these prints:</p>
            {requestArr.map((print, index) => {
                return (<img key={index} src={print} className={styles.img} />)
            })}
        </div>
    ) : ''
}
