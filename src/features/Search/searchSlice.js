import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice ({
    name: 'search',
    initialState: {
        query: ''
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        clearQuery: (state, action) => {
            state.query = ''
        }
    }
});

export const selectQuery = (state) => state.search.query.toUpperCase();
export const { setQuery, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;