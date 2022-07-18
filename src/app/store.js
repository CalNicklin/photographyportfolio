import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../features/Projects/projectsSlice';
import modalReducer from '../features/Modal/modalSlice';
import searchReducer from '../features/Search/searchSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    modal: modalReducer,
    search: searchReducer
  }
});
