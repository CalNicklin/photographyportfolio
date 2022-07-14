import React from 'react';
import { useSelector } from 'react-redux';
import { selectProjects, filterProjects } from './projectsSlice';
import { useLocation, Link } from 'react-router-dom';
import Search from '../Search/Search';

export default function Projects () {

    const projects = useSelector(selectProjects);
    const projectsArray = Object.values(projects);

    return (
        <main>
            <h2>Projects</h2>
            <ul>
                {projectsArray.map(project => {
                    return (
                        <li>
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