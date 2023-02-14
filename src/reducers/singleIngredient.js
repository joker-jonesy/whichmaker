import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleIngredient = createAsyncThunk(
    "singleIngredient",
    async (id) => {
        try {
            const { data } = await axios.get(`/api/ingredients/${id}`);
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);


const initialState = {
    info: {}
};

const singleIngredientSlice = createSlice({
    name: "singleIngredient",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleIngredient.fulfilled, (state, action) => {
                // Add ingredient to the state array
                state.info = action.payload;
            })
    },
});

export const selectSingleIngredient = (state) => {
    return state.singleIngredient;
};

export default singleIngredientSlice.reducer;