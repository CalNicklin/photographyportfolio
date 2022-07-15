import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProjects } from '../Projects/projectsSlice';
import { openModal, closeModal, setSrc } from '../Modal/modalSlice'; 
import { selectIsOpen } from '../Modal/modalSlice';
import Modal from '../Modal/Modal.js';

export default function Project () {

    const projects = useSelector(selectProjects);
    const { title } = useParams();
    const project = projects[title];
    const dispatch = useDispatch();
    const isOpen = useSelector(selectIsOpen);

    const handleClick = (event) => {
        dispatch(openModal());
        dispatch(setSrc(event.target.src))
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.intro}</p>
            {project.photos.map((photo, index) => {
                    return (
                        <div key={index}>
                            <img id={`image${index}`} 
                                 src={photo.src}
                                 alt={photo.alt} 
                                 onClick={handleClick}
                                 />
                        </div>
                    )
                })
            }
            <Modal />
        </div>
    );
};