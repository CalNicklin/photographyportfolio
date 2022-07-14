import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../features/Projects/projectsSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer
  },
});
