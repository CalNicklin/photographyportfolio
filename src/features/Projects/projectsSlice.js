import { createSlice } from '@reduxjs/toolkit';
import { PROJECTS } from '../../app/data';

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: PROJECTS,
    },
    reducers: {}
});

export const selectProjects = (state) => state.projects.projects;
export const filterProjects = (query, projects) => Object.values(projects).filter(project => project.title.toLowerCase().includes(query.toLowerCase()));
export default projectsSlice.reducer;