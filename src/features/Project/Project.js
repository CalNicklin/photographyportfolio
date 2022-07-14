import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProjects } from '../Projects/projectsSlice';

export default function Project () {

    const projects = useSelector(selectProjects);
    const { title } = useParams();
    const project = projects[title];
    
    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.intro}</p>
            {project.photos.map((photo, index) => {
                    return (
                        <img key={index} src={photo} />
                    )
                })
            }
        </div>
    );
};