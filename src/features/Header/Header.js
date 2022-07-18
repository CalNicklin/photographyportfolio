import { React } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header () {
    return (
        <div className='header'>
            <h1>C.Nicklin</h1>
            <div className='nav'>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/prints'>Prints</NavLink>
            </div>
        </div>
    )
}