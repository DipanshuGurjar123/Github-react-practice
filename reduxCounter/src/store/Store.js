import { configureStore } from "@reduxjs/toolkit" 
import counterReducer from "../features/counterSlice"
import themeReducer from "../features/themeSlice"

export const store = configureStore({
    reducer: {

        // This (counter) is the value that 'useselector' takes //
        counter: counterReducer,

        // for theme //
        theme : themeReducer
    }
})