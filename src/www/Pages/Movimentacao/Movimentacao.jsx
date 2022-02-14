import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const defaultValues = {
  login_origem: "",
  login_destino: "",
  valor: "",
};

const CreateMovimentacao = () => {
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
              id="login_origem"
              name="login_origem"
              label="Login de Origem"
              type="text"
              required
              value={formValues.login_origem}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="login_destino"
              name="login_destino"
              label="Login de Destino"
              type="text"
              required
              value={formValues.login_destino}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="valor"
              name="valor"
              label="Valor"
              type="Number"
              required
              value={formValues.valor}
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
export default CreateMovimentacao;
