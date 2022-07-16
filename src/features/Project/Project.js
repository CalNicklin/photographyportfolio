import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProjects } from '../Projects/projectsSlice';
import { openModal, setSrc, setAlt } from '../Modal/modalSlice'; 
import Modal from '../Modal/Modal.js';

export default function Project () {

    // The project text and images displayed are generated via the url params
    const projects = useSelector(selectProjects);
    const { title } = useParams();
    const project = projects[title];
    const dispatch = useDispatch();

    const handleClick = (event) => {
        // This event triggers the modal to open and sets the image src and alt attritbutes to that of a specified file in data.js
        // accessed via projectsSlice.js
        dispatch(openModal());
        dispatch(setSrc(event.target.src));
        dispatch(setAlt(event.target.alt));
    }

    return (
        <div className = 'projectContainer'>
            <h2>{project.title}</h2>
            <p>{project.intro}</p>
            <div className = 'gallery'>
                {project.photos.map((photo, index) => {
                        return (
                                <img id={`image${index}`} 
                                    key={index}
                                    src={photo.src}
                                    alt={photo.alt} 
                                    onClick={handleClick}
                                    />
                        )
                    })
                }
            </div>
            {/* This instance of Modal will display based on a boolean operator in modal.js*/}
            <Modal />
        </div>
    );
};