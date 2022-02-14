import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import "./FrontPage.css";

function FrontPage() {
  const login = useSelector((state) => state.login);
  const saldo = 0.0;
  return (
    <>
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
