import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';




export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const request = await axios.post(`http://localhost:3001/api/v1/user/login`, userCredentials);
        const response = await request.data.body.token;
        localStorage.setItem('user', response);
        return response;
    }
)



const authSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: { token: "" },
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = { token: "" };
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user.token = action.payload;
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message === 'Request failed with status code 400') {
                    state.error = ` accès refusé ! informations d'identification invalides`
                }
                else {
                    state.error = action.error.message
                }
            })
    }
});

export default authSlice.reducer;