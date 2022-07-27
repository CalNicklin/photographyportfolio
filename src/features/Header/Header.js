import { React } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPrints } from '../Prints/printsSlice';

export default function Header() {

    const prints = useSelector(selectPrints).length;

    return (
        <div className='header'>
            <NavLink className='homeBtn' to='/'><h1>C.Nicklin</h1></NavLink>
            <div className='nav'>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/prints'>
                    {/* use of ternary operator works because prints.length is an array with initial state of 0, which evaluates to falsy. */}
                    {prints ? `Prints(${prints})` : 'Prints'}
                </NavLink>
            </div>
        </div>
    )
}