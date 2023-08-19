import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthSliceLogin {
    status?: string;
    uid : string;
    email: string;
    userName: string;
    photoURL: string | null;
    errorMessage: string | null;
}
interface AuthSliceLogout {
    errorMessage: string | null;
}


const initialState: AuthSliceLogin = {
    status: "not-authenticated", //'checking' 'not-authenticated','authenticated'
    uid: "null",
    email: "null",
    userName: "null",
    photoURL: "null",
    errorMessage: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthSliceLogin>) => {
            state.status = 'authenticated',
            state.uid    = action.payload.uid,
            state.email  = action.payload.email,
            state.userName  = action.payload.userName,
            state.photoURL     = action.payload.photoURL,
            state.errorMessage = action.payload.errorMessage
        },
        logout:(state, action: PayloadAction<AuthSliceLogout>) => {
            state.status = 'not-authenticated',
            state.uid    = '',
            state.email  = '',
            state.userName  = '',
            state.photoURL     = '',
            state.errorMessage = action.payload.errorMessage
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
})

export const {login, logout, checkingCredentials} = authSlice.actions; 