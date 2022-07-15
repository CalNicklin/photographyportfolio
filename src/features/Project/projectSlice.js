import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice ({
    name: 'project',
    initialState: {
        isOpen: false
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
        }
    }
});

export const selectIsOpen = (state) => state.project.isOpen;
export const { openModal, closeModal } = projectSlice.actions;
export default projectSlice.reducer; 