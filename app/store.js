import { configureStore } from "@reduxjs/toolkit";
import bodyPartFilterReducer from "@/feature/bodyPartFilter.Slice";

// config the store
export default configureStore({
    reducer: {
        bodyPartFilter: bodyPartFilterReducer,
    },
});
