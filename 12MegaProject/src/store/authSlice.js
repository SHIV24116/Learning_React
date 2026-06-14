import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status: false,
    userData:null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers: {
        login: (state,action)=> {
            state.status=true;
            state.userData=action.payload.userData;   //here this userdata includes things like user id,name,email,verification status,etc..provided by appwrite auth/account services ....later we can use this data to get actual big data from databases and stores
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }

    }
})

export const {login,logout}=authSlice.actions;

export default authSlice.reducer;