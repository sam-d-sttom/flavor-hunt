import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserLoggedIn: false,
    username: '',
    userEmail: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateIsUserLoggedIn: (state, action) => {
            state.isUserLoggedIn = action.payload;
        },
        setUserNameAndEmail: (state, action) => {
            state.username = action.payload.username;
            state.userEmail = action.payload.email;
        }
    }
})

export default userSlice.reducer;
export const {updateIsUserLoggedIn, setUserNameAndEmail} = userSlice.actions;