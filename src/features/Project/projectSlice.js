import { createSlice } from "@reduxjs/toolkit";

// The only state this manages is the confirmationModal function i.e. image opacity

export const projectSlice = createSlice ({
    name: 'project',
    initialState: {
        confirmationIsOpen: false
    },
    reducers: {
        confirm: (state, action) => {
            state.confirmationIsOpen = true;
        },
        reset: (state, action) => {
            state.confirmationIsOpen = false;
        }
    }
});

export const selectConfirmationIsOpen = (state) => state.project.confirmationIsOpen;
export const { confirm, reset } = projectSlice.actions;
export default projectSlice.reducer;