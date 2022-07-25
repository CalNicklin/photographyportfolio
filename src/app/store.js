import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../features/Projects/projectsSlice';
import modalReducer from '../features/Modal/modalSlice';
import searchReducer from '../features/Search/searchSlice';
import printsReducer from '../features/Prints/printsSlice';
import printRequestFormReducer from '../features/PrintRequestForm/printRequestFormSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    modal: modalReducer,
    search: searchReducer,
    prints: printsReducer,
    printRequestForm: printRequestFormReducer
  }
});

