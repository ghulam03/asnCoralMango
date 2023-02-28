import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state) => {
      state.isAuthenticated = true;
    },

    deleteUser: (state) => {
      state.isAuthenticated = false;
    },
  },
});
export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;
