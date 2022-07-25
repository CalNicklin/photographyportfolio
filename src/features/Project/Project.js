import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProjects } from '../Projects/projectsSlice';
import { openModal, setSrc, setAlt } from '../Modal/modalSlice';
import { addPrint, selectPrints } from '../Prints/printsSlice';
import Modal from '../Modal/Modal.js';
import styles from './Project.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Project() {

    // The project text and images displayed are generated via the url params
    const projects = useSelector(selectProjects);
    const { title } = useParams();
    const project = projects[title];
    const prints = useSelector(selectPrints);
    const dispatch = useDispatch();
    library.add(faPlus);

    const handleClick = (event) => {
        // This event triggers the modal to open and sets the image src and alt attritbutes to that of a specified file in data.js
        // accessed via projectsSlice.js
        dispatch(openModal());
        dispatch(setSrc(event.target.src));
        dispatch(setAlt(event.target.alt));
    };

    const addToPrints = (event) => {
        // Disallow adding to prints if image already present in prints request
        if (!prints.includes(event.target.value)) {
            dispatch(addPrint(event.target.value));
        }
    };

    return (
        <div className='projectContainer'>
            <h1 className={styles.h1}>{project.title}</h1>
            <p className={styles.date}>{project.date}</p>
            <p className={styles.intro}>{project.intro}</p>
            {/* This instance of Modal will display based on a boolean operator in modal.js*/}
            <Modal />
            <div className='gallery'>
                {project.photos.map((photo, index) => {
                    return (
                        <div 
                            className={styles.parent} 
                            key={index}
                        >
                            <img id={`image${index}`}
                                src={photo.src}
                                alt={photo.alt}
                                onClick={handleClick}
                            />
                            {/* <button
                                className={styles.child}
                                onClick={addToPrints}
                                value={photo.src}
                            >
                                Request a print
                            </button> */}
                            <FontAwesomeIcon icon={faPlus} className={styles.faPlus} size='xl' onClick={addToPrints}
                                value={photo.src} />
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};