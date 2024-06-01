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
  email: string;
  password: string;
}
interface DataFromSignin {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

const initialState: LoginSliceState = {
  firstname: localStorage.getItem("token") ? 'Tony' : '',
  lastname: localStorage.getItem("token") ? 'Stark' : '',
  username: localStorage.getItem("token") ? 'Iron' : '',
  email: localStorage.getItem("token") ? 'tony@stark.com' : '',
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
        const payload: DataFromLogin = {email: data.email, password: data.password}

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
            // on récupèrerait ici et stockerait dans le store les données de l'utilisateur qui vient de se connecter
            dispatch(authSlice.actions.setEmail('tony@stark.com'))
            dispatch(authSlice.actions.setUsername('Iron'))
            dispatch(authSlice.actions.setFirstname('Tony'))
            dispatch(authSlice.actions.setLastname('Stark'))
          }
          return dataJSON;
        } else {
          const errors = await response.json();
          return Promise.reject(errors);
        }
      },
    ),
    signin: create.asyncThunk(
      async (data: DataFromSignin) => {
        const payload: DataFromSignin = {email: data.email, password: data.password, firstname: data.firstname, lastname: data.lastname, username: data.username}

        const response = await fetch('http://localhost:3001/api/v1/user/signup', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        if (response.ok) {
          const dataJSON = await response.json();
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
    selectUsername: auth => auth.username,
    selectFirstname: auth => auth.firstname,
    selectLastname: auth => auth.lastname,
  },
})

export const { login, signin, setAuthToken, setUsername } = authSlice.actions

export const { selectIsAuthenticated, selectUsername, selectFirstname, selectLastname } = authSlice.selectors
