import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import setLoginInfo from "../../Store/Setters/loginSetter";
import setLogin from "../../Store/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const defaultValues = {
  login: "",
  senha: "",
};

const Login = () => {
  //const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    setLoginInfo(formValues.login, formValues.senha).then((res) => {
      console.log(res);
      dispatch(setLogin(formValues.login));
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
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
