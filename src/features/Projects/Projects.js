import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProjects } from './projectsSlice';
import { Link } from 'react-router-dom';
import { selectQuery, clearQuery } from '../Search/searchSlice';
import Search from '../Search/Search';
import styles from './Projects.module.css';

export default function Projects () {

    const projects = useSelector(selectProjects);
    const searchTerm = useSelector(selectQuery);
    // Converts the projects object data into an array so .map works
    const projectsArray = Object.values(projects);
    // projects are filtered based on a search term matching against title, intro or alt data fields held in data.js
    // the search term and data fields are all .toUpperCase to make case insensitive
    const filteredProjects = projectsArray.filter(project => {
        let title = project.title.toUpperCase();
        let intro = project.intro.toUpperCase();
        let altText = project.photos.map(photo => {
            return photo.alt
        });
        // alttext is originally an array of arrays within data.js, so .toString in order to match search term with entire array of images.
        let altTextString = altText.toString().toUpperCase()
        return (
            title.includes(searchTerm) ||
            intro.includes(searchTerm) ||
            altTextString.includes(searchTerm)
        );
    });

    // clears query state to that on returning to projects after searching, the full array is shown.
    const dispatch = useDispatch();
    const onClickHandler = (e) => {
        dispatch(clearQuery());
    };

    return (
        <main>
            <div className={styles.search}>
                <Search />
            </div>
            <ul className={styles.ul}>
                {filteredProjects.map((project, index) => {
                    return (
                        <li key={index} className={styles.li}>
                            {/* Project.slug is used to generate the url to a specified project. This is referenced from data.js */}
                            <Link to={`${project.slug}`} onClick={onClickHandler}>
                                <img src={project.photos[0].src} alt={project.photos[0].alt} />
                                <h2>{project.title}</h2>
                                <h3>{project.date}</h3>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
};