import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsOpen, selectSrc } from './modalSlice';
import { closeModal } from './modalSlice';


export default function Modal () {

    const dispatch = useDispatch();
    const isOpen = useSelector(selectIsOpen);
    const source = useSelector(selectSrc);


    const handleClick = (event) => {
        dispatch(closeModal());
    }

    return isOpen ? (
        <div>
            <img src={source} />
            <button onClick={handleClick} />
        </div>
    ) : <p>Modal is not open</p>
}



