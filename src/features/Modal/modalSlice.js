import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice ({
    name: 'modal',
    initialState: {
        isOpen: false,
        src: ''
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
        },
        setSrc: (state, action) => {
            state.src = action.payload;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
            state.src = '';
        }
    }
});

export const selectIsOpen = (state) => state.modal.isOpen;
export const selectSrc = (state) => state.modal.src;
export const { openModal, closeModal, setSrc } = modalSlice.actions;
export default modalSlice.reducer; 