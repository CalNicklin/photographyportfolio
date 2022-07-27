import React from "react";
import { useSelector } from "react-redux";
import { selectProjects } from "../Projects/projectsSlice";
import { Link } from "react-router-dom";
export default function HomeBanner() {

    const projects = useSelector(selectProjects)
    const projectsArray = Object.values(projects);
    const photosArray = projectsArray.map(project => {
        let photos = project.photos;
        return photos;
    });
    
    const photosArrayIndex = Math.floor(Math.random() * photosArray.length);
    const inArrayIndex = Math.floor(Math.random() * (photosArray[photosArrayIndex]).length);
    const item = Object.values(photosArray[photosArrayIndex][inArrayIndex])
    const src = item[0];
    const alt = item[1];
    const link = projectsArray[photosArrayIndex].slug;

    return (
        <div>
            <Link to={`/projects/${link}`}>
            <img src={src} className='banner' />
            </Link>
            <p>{alt}</p>
        </div>    
    )   
}