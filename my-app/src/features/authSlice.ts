import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../app/createAppSlice"

export interface LoginSliceState {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  isAuthenticated: boolean
}

interface DataFromLogin {
  username: string;
  password: string;
}
interface Payload {
  email: string;
  password: string;
}

const initialState: LoginSliceState = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  isAuthenticated: localStorage.getItem("token") ? true : false
}

export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: create => ({
    setFirstname: create.reducer(
      (state, newFirstname: PayloadAction<string>) => {
        state.firstname = newFirstname.payload
      }
    ),
    setLastname: create.reducer(
      (state, newLastname: PayloadAction<string>) => {
        state.lastname = newLastname.payload
      }
    ),
    setUsername: create.reducer(
      (state, newUsername: PayloadAction<string>) => {
        state.username = newUsername.payload
      }
    ),
    setEmail: create.reducer(
      (state, newEmail: PayloadAction<string>) => {
        state.email = newEmail.payload
      }
    ),
    setIsAuthenticated: create.reducer(
      (state, newIsAuthenticated: PayloadAction<boolean>) => {
        state.isAuthenticated = newIsAuthenticated.payload
      }
    ),
    login: create.asyncThunk(
      async (data: DataFromLogin, {dispatch}) => {
        const payload: Payload = {email: data.username, password: data.password}

        const response = await fetch('http://localhost:3001/api/v1/user/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        if (response.ok) {
          const dataJSON = await response.json();
          if (dataJSON.status === 200) {
            dispatch(authSlice.actions.setAuthToken(dataJSON.body.token))
          }
          return dataJSON;
        } else {
          const errors = await response.json();
          return Promise.reject(errors);
        }
      },
    ),
    setAuthToken: create.asyncThunk(
      async (token: string | null, {dispatch}) => {
        if (token !== null) {
          localStorage.setItem("token", token);
          dispatch(authSlice.actions.setIsAuthenticated(true))
        } else {
          localStorage.removeItem("token");
          dispatch(authSlice.actions.setIsAuthenticated(false))
        }
      }
    )
  }),
  selectors: {
    selectIsAuthenticated: auth => auth.isAuthenticated,
  },
})

export const { login, setAuthToken } = authSlice.actions

export const { selectIsAuthenticated } = authSlice.selectors
