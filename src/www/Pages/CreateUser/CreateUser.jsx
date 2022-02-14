import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const defaultValues = {
  nome: "",
  login: "",
  password: "",
};

async function createLogin(login, senha, nome) {
  const data = { login, senha, nome };
  const BaseURL = "http://localhost:4000";
  {
    const fetchData = await axios.post(`${BaseURL}/user/create`, data);
    console.log(fetchData);
    return fetchData;
  }
}

const CreateUser = () => {
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
    const createdUser = await createLogin(
      formValues.login,
      formValues.senha,
      formValues.nome
    );
    console.log("createdUser", createdUser);
  };

  return (
    <>
      {" "}
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/frontpage">FrontPage</Link> |{" "}
        <Link to="/balance">Balance</Link> |{" "}
        <Link to="/create-user">Create User</Link> |{" "}
        <Link to="/create-movimentacao">Criar Movimentação</Link> |{" "}
      </nav>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <TextField
              id="name-input"
              name="nome"
              label="Nome"
              type="text"
              value={formValues.nome}
              onChange={handleInputChange}
            />
          </Grid>
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
              name="password"
              label="Password"
              type="password"
              required
              value={formValues.password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default CreateUser;
