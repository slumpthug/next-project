import { createSlice } from "@reduxjs/toolkit";
import cards from '../data/card.json';

export const basketSlice = createSlice({
    name : 'bask',
    initialState : {
        bask : cards 
    },
    reducers : {

    },
})

export const {} = basketSlice.actions;
export const selectCards = state => state.bask.bask;
export default basketSlice.reducer;