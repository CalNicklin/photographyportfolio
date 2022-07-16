import React from 'react';
import { useSelector } from 'react-redux';
import { selectProjects, filterProjects } from './projectsSlice';
import { useLocation, Link } from 'react-router-dom';
import Search from '../Search/Search';

export default function Projects () {

    const projects = useSelector(selectProjects);
    // Converts the projects object data into an array so .map works
    const projectsArray = Object.values(projects);

    return (
        <main>
            <h2>Projects</h2>
            <ul>
                {projectsArray.map((project, index) => {
                    return (
                        <li key={index}>
                            {/* Project.slug is used to generate the url to a specified project. This is referenced from data.js */}
                            <Link to={`${project.slug}`}>
                                {project.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
};