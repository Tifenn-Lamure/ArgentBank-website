import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../app/createAppSlice"

export interface LoginSliceState {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
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
  email: ''
}

const setToken = (token: string) => {
  localStorage.setItem("token", token);
  // const now = new Date(Date.now()).getTime().toString();
  // localStorage.setItem("lastLoginTime", now);
};

export const getToken = () => {
  return localStorage.getItem("token");

  // const now = new Date(Date.now()).getTime();
  // const timeAllowed = 1000 * 60 * 30;

  // const lastLoginTimeDate = localStorage.getItem("lastLoginTime");
  // if(lastLoginTimeDate) {
  //   const timeSinceLastLogin = now - new Date(lastLoginTimeDate).getTime();
  //   if (timeSinceLastLogin < timeAllowed) {
  //       return localStorage.getItem("token");
  //   }
  // }
  
};

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
    login: create.asyncThunk(
      async (data: DataFromLogin) => {
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
            setToken(dataJSON.body.token);
          }
          return dataJSON;
        } else {
          const errors = await response.json();
          return Promise.reject(errors);
        }
      },

    ),
  }),
  // selectors: {
  //   selectCount: counter => counter.value,
  // },
})

export const { login, setFirstname } = authSlice.actions

// export const { selectCount, selectStatus } = counterSlice.selectors
