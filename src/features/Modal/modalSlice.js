import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice ({
    name: 'modal',
    initialState: {
        isOpen: false,
        src: '',
        alt: ''
    },
    reducers: {
        // Would like to combine the top three reducers into a single function
        openModal: (state, action) => {
            state.isOpen = true;
        },
        setSrc: (state, action) => {
            state.src = action.payload;
        },
        setAlt: (state, action) => {
            state.alt = action.payload;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
            // Resets the src and alt to empty strings
            state.src = '';
            state.alt = '';
        }
    }
});


export const selectIsOpen = (state) => state.modal.isOpen;
export const selectSrc = (state) => state.modal.src;
export const selectAlt = (state) => state.modal.alt;
export const { openModal, closeModal, setSrc, setAlt } = modalSlice.actions;
export default modalSlice.reducer; 