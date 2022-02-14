import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

/*
import setLoginInfo from "../../Store/Setters/loginSetter";
import setLogin from "../../Store/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
*/

const defaultValues = {
  login: "",
  senha: "",
};

async function createLogin(login, senha) {
  const data = { login, senha };
  const BaseURL = "http://localhost:4000";
  {
    const fetchData = await axios.post(`${BaseURL}/login`, data);
    console.log(fetchData);
    return fetchData;
  }
}
/* ---------- Inicio do Elemento --------- */
const Login = (props) => {
  //const login = useSelector((state) => state.login);
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async function(event) {
    event.preventDefault();
    const isLogged = await createLogin(formValues.login, formValues.senha);
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
