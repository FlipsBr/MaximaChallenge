import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./FrontPage.css";

function FrontPage() {
  const login = useSelector((state) => state.login);
  const saldo = 0.0;
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
      <Box className="paper">
        <Typography variant="h4">
          Olá {login}, seu saldo é de R${saldo}
        </Typography>
        <Button size="medium" variant="contained">
          {"Cheque Seu Histórico "}
        </Button>{" "}
        <Button size="medium" variant="contained">
          {"Transferir Dinheiro "}
        </Button>{" "}
        <Button size="medium" variant="contained">
          {"Criar usuário "}
        </Button>
      </Box>
    </>
  );
}

export default FrontPage;
