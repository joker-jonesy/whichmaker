import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleRecipe = createAsyncThunk(
    "singleRecipe",
    async (id) => {
        try {
            const { data } = await axios.get(`/api/recipes/${id}`);
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

const initialState = {
    info: {}
};

const singleRecipeSlice = createSlice({
    name: "singleRecipe",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleRecipe.fulfilled, (state, action) => {
                // Add recipe to the state array
                state.info = action.payload;
            })
    },
});

export const selectSingleRecipe = (state) => {
    return state.singleRecipe;
};

export default singleRecipeSlice.reducer;