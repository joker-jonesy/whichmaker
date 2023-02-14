import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleUser = createAsyncThunk(
    "singleUser",
    async (id) => {
        try {
            const { data } = await axios.get(`/api/users/${id}`);
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const fetchUserRecipes = createAsyncThunk(
    "singleUserRecipes",
    async (id) => {
        try {
            const { data } = await axios.get(`/api/users/${id}/recipes`);
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);


const initialState = {
    info: {},
    recipes: [],
};

const singleUserSlice = createSlice({
    name: "singleUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleUser.fulfilled, (state, action) => {
                // Add user to the state array
                state.info = action.payload;
            })
            .addCase(fetchUserRecipes.fulfilled, (state, action) => {
                // Add user to the state array
                state.recipes = action.payload;
            })
    },
});

export const selectSingleUser = (state) => {
    return state.singleUser;
};

export default singleUserSlice.reducer;