import { configureStore } from "@reduxjs/toolkit";
import counter from './CounterSlice';

export default configureStore({
    reducer:{
        counter:counter,
    },
})