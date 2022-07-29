import React from "react";
import { useSelector } from "react-redux";
import { selectProjects } from "../Projects/projectsSlice";
import { Link } from "react-router-dom";

export default function HomeBanner() {

    // Render logic to pick an image and caption at random from all projects in data.js, used on home screen banner

    // 1. Convert the object of project objects into an array
    // Hooks
    const projects = useSelector(selectProjects)
    const projectsArray = Object.values(projects);

    // 2. Find a random index to choose a single project object from the projects array
    const randomIndex = Math.floor(Math.random() * projectsArray.length)
    const project = projectsArray[randomIndex];

    // 3. Now we have access to the randomly selected project properties
    const { title, slug, date, photos } = project;

    // 4. We need to extract some more data from the 'photos' as this currently an array of objects with src and alt properties
    const randomPhotoIndex = Math.floor(Math.random() * photos.length);
    const { src, alt } = photos[randomPhotoIndex];
    

    return (
        <div className='banner'>
            <Link to={`/projects/${slug}`}>
            <img src={src} alt={alt} />
            </Link>
            <p>{alt}</p>
            <h2>{title}, {date}</h2>
        </div>    
    )   
}