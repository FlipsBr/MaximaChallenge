import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: "",
    saldo: "",
  },
  reducers: {
    setLogin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;

/* 


 setLogin2: (state, action) => {
      let { login, password } = action.payload;
      const BaseURL = "http://localhost:4000";
      {
        axios
          .post(`${BaseURL}/user`, {
            body: {
              login,
              password,
            },
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => dispatch(setLogin(res)));
      }
    },   


    */
