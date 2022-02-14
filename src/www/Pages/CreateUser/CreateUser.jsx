import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const defaultValues = {
  name: "",
  login: "",
  password: "",
};

const CreateUser = () => {
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
              name="name"
              label="Name"
              type="text"
              value={formValues.name}
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
