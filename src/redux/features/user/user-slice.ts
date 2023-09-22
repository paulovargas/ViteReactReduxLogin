import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../../../api/apiUser";
//import { userLogin } from "../../../api/apiUser";

interface UserState {
    login: {

        id: number;
        email: string;
        password: string;
    }    
}

const initialState: UserState = {
    login: {

        id: 0,
        email: '',
        password: '',
    }
    
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, actions) => {
            //console.log(state.login)
            //state.login = actions.payload
            userLogin(actions.payload);
            console.log(actions.payload);
        }
    }
})

export const { loginUser } = userSlice.actions;
export const userReducer = userSlice.reducer;