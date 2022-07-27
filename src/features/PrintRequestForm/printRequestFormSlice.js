import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitPrintRequest = createAsyncThunk(
    'printRequestForm/submitPrintRequest',
    async (request) => {
        try {
            return await axios({
                method: 'POST',
                url: 'https://webhook.site/7f180eff-e14c-484b-849b-b8af6a8a4716',
                data: request
            })
                .then((response) => console.log(response.data))
        }
        catch (err) {
            console.log(err)
        }
    });


export const printRequestFormSlice = createSlice({
    name: 'printRequestForm',
    initialState: {
        printSize: '',
        status: 'idle',
        fulfilled: false,
        request: []
    },
    reducers: {
        setPrintSize: (state, action) => {
            state.printSize = action.payload;
        },
        setFulfilled: (state, action) => {
            state.fulfilled = false;
        },
        setRequest: (state, action) => {
            let printArrToAdd = action.payload.prints;
            printArrToAdd.forEach(print => state.request.push(print))
        }
    },
    extraReducers: {
        [submitPrintRequest.pending]: (state, action) => {
            state.status = 'pending';
        },
        [submitPrintRequest.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.fulfilled = true
        },
    }
});

export const selectPrintSize = (state) => state.printRequestForm.printSize;
export const selectStatus = (state) => state.printRequestForm.status;
export const selectFulfilled = (state) => state.printRequestForm.fulfilled;
export const selectRequest = (state) => state.printRequestForm.request;
export const { setPrintSize, setFulfilled, setRequest } = printRequestFormSlice.actions;
export default printRequestFormSlice.reducer;

