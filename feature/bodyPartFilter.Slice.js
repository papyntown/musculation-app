import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const bodyPartFilterSlice = createSlice({
    name: "bodyPartFilter",
    initialState: {
        bodyPartFilter: "All",
    },
    reducers: {
        setBodyPartFilter: (state, action) => {
            state.bodyPartFilter = action.payload;
        },
    },
});
// export the action
export const { setBodyPartFilter } = bodyPartFilterSlice.actions;

// export default the store
export default bodyPartFilterSlice.reducer;
