import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            // mutate the state
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn= false;
        },
    },
});
export const authActions = authSlice.actions;

export default authSlice;