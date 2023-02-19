import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const exerciceIdSlice = createSlice({
    name: "exerciceId",
    initialState: {
        exerciceId: "",
    },
    reducers: {
        setexerciceId: (state, action) => {
            state.exerciceId = action.payload;
        },
    },
});
// export the action
export const { setexerciceId } = exerciceIdSlice.actions;

// export default the store
export default exerciceIdSlice.reducer;
