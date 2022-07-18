import { createSlice } from "@reduxjs/toolkit";

export const printsSlice = createSlice ({
    name: 'prints',
    initialState: [],
    reducers: {
        addPrint: (state, action) => {
            state.push(action.payload)
        },
        removePrint: (state, action) => {
            return state.filter(print => print !== action.payload)
        }
    }
});

export const selectPrints = (state) => state.prints;
export const { addPrint, removePrint } = printsSlice.actions;
export default printsSlice.reducer;