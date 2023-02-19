import { configureStore } from "@reduxjs/toolkit";
import bodyPartFilterReducer from "@/feature/bodyPartFilter.Slice";
import exerciceIdReducer from "@/feature/exerciceId.Slice";

// config the store
export default configureStore({
    reducer: {
        bodyPartFilter: bodyPartFilterReducer,
        exerciceId: exerciceIdReducer,
    },
});
