// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";

// ⚠️ NOTICE THE PATH: We go up two levels (../../) to get out of 'redux' and 'src'
// to reach 'pages'
import customerReducer from "../pages/customers/customerSlice";
import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // This Key "customers" is what you use in useSelector((state) => state.customers...)
    customers: customerReducer,
    counter: counterReducer,
  },
});
