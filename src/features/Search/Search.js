import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from './searchSlice';

export default function Search () {
  const searchInputRef = useRef();
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    e.preventDefault();
    const query = e.target.value;
    dispatch(setQuery(query));
  };

  return (
    <form>
      <input type='text' ref={searchInputRef} onChange={onChangeHandler} placeholder='Search by keyword'/>
    </form>
  )
};


