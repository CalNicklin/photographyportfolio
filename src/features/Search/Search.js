import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from './searchSlice';

export default function Search() {

  // Hooks
  const searchInputRef = useRef();
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    e.preventDefault();
    const query = e.target.value;
    dispatch(setQuery(query));
  };

  return (
    <form form onSubmit={e => { e.preventDefault()}}>
      <input type='text' ref={searchInputRef} onChange={onChangeHandler} placeholder='Search by keyword' />
    </form>
  )
};


