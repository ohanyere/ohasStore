import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authservice";
const initialState = {
    user : {id:4,name:"ohanyere"},
    isError : false,
    message : ""
}
console.log("authSlice")

export const signUp = createAsyncThunk("auth/signup", async(userData, thunkAPI) => {
    const {email, password }= userData
  try {
        return await authService.signUp(email, password)
  } catch (error) {
    // return thunkApi.rejectWithValue()
    console.log(error)
    
  }
})

export const signIn = createAsyncThunk("auth/signin", async(userData, thunkAPI) => {
    
  try {
    const {email, password } = userData
        return await authService.signIn(email, password)
  } catch (error) {
    // return thunkApi.rejectWithValue()
    console.log(error)
    
  }
})

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {

    },

    extraReducers : (builder) => {
        builder
        .addCase(signUp.fulfilled, (state, action) => {
            state.user = action.payload
        })
        .addCase(signUp.rejected, (state, action) => {
            state.isError = true,
            state.message = action.payload
        })
    }
})

export default authSlice.reducer