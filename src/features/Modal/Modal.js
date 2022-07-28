import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsOpen, selectSrc, selectAlt } from './modalSlice';
import { closeModal } from './modalSlice';
// Modal styles overide global app styling.
import styles from './Modal.module.css';

// Modal is the feature that allows for images to be clicked on and enlarged

export default function Modal() {

    const dispatch = useDispatch();

    // Accesses state properties of project within data.js via modalSlice and projectsSlice
    // Hooks
    const isOpen = useSelector(selectIsOpen);
    const source = useSelector(selectSrc);
    const alt = useSelector(selectAlt);


    const handleClick = () => {
        dispatch(closeModal());
    }

    // Uses ternary expression to handle visibilty of modal
    return isOpen ? (
        <div className={styles.modal}>
            {/* Overlay masks off background so only the modal is visible */}
            <div className={styles.overlay}></div>
            <div className={styles.modal_content}>
                <img src={source} alt={alt} />
                <button className={styles.closeButton} onClick={handleClick}>Close</button>
            </div>
        </div>
    ) : ''
}



