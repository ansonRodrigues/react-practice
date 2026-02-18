import { createSlice } from "@reduxjs/toolkit";
import { mockCustomers } from "../../data/cData";

const initialState = {
  customers: mockCustomers, // In the future, this starts empty
  isLoading: false,
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    // We will add logic here later to handle API fetching
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
  },
});

export const { setCustomers } = customerSlice.actions;
// Selector to access data in the component
export const selectAllCustomers = (state) => state.customers.customers;

export default customerSlice.reducer;
