import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchIngredientsAsync = createAsyncThunk("allIngredients", async () => {
    try {
        const { data } = await axios.get(`/api/ingredients`);
        return data;
    } catch (err) {
        console.log(err);
    }
});

const ingredientsSlice = createSlice({
    name: "ingredients",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchIngredientsAsync.fulfilled, (state, action) => {
            // Add ingredient to the state array
            return action.payload;
        });
    },
});

export const selectIngredients = (state) => {
    return state;
};

export default ingredientsSlice.reducer;