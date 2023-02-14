import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchRecipesAsync = createAsyncThunk("allRecipes", async () => {
    try {
        const { data } = await axios.get(`/api/recipes`);
        return data;
    } catch (err) {
        console.log(err);
    }
});

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecipesAsync.fulfilled, (state, action) => {
            // Add recipe to the state array
            return action.payload;
        });
    },
});

export const selectRecipes = (state) => {
    return state.recipes;
};

export default recipesSlice.reducer;