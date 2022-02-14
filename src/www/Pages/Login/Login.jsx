import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import setLoginInfo from "../../Store/Setters/loginSetter";
import setLogin from "../../Store/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const defaultValues = {
  login: "",
  senha: "",
};
async function createLogin(login, password) {
  console.log(login, password);
  const BaseURL = "http://localhost:4000";
  {
    axios
      .post(`${BaseURL}/login`, {
        login,
        password,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        return res;
      });
  }
}
const Login = () => {
  const dispatch = useDispatch();
  //const login = useSelector((state) => state.login);
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues.login);
    const loggedIn = await createLogin(formValues.login, formValues.senha);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item>
          <TextField
            id="login-input"
            name="login"
            label="Login"
            type="text"
            required
            value={formValues.login}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            name="senha"
            label="Password"
            type="password"
            required
            value={formValues.senha}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="Login">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default Login;
