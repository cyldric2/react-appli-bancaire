import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



export const getUserInfos = createAsyncThunk(
    'user/userInfos',
    async (token) => {
        const request = await axios.post("http://localhost:3001/api/v1/user/profile ", {}, {
            headers: { 'Authorization': 'Bearer' + token }
        })
        const response = await request.data.body;
        return response;
    }
)

const userInfosSlice = createSlice({
    name: "userInfos",
    initialState: {
        user: { token: "", email: "", firstName: "", lastName: "", userName: "" },
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserInfos.pending, (state) => {
                state.loading = true;
                state.user = { token: "" };
                state.error = null
            })

            .addCase(getUserInfos.fulfilled, (state, action) => {
                state.user.email = action.payload.email;
                state.user.firstName = action.payload.firstName;
                state.user.lastName = action.payload.lastName;
                state.user.userName = action.payload.userName;
                state.error = null
            })
            .addCase(getUserInfos.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                if (action.error.message === 'Request failed with status code 400') {
                    state.error = ` accès refusé ! informations d'identification invalides`
                }
                else {
                    state.error = action.error.message
                }
            })

    }
});

export default userInfosSlice.reducer;