import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../React Redux/ProductSlice";

const store = configureStore({
    reducer : {
       product:ProductSlice
    }
})

export default store;