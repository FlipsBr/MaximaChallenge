import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./Store/store.js";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import FrontPage from "./Pages/FrontPage/FrontPage";
import Balance from "./Pages/Balance/Balance.jsx";
import CreateUser from "./Pages/CreateUser/CreateUser";
import CreateMovimentacao from "./Pages/Movimentacao/Movimentacao";

const loggedIn = true;

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />

        <Route exact path="/frontpage" element={<FrontPage />} />
        <Route exact path="/balance" element={<Balance />} />
        <Route exact path="/create-user" element={<CreateUser />} />
        <Route
          exact
          path="/create-movimentacao"
          element={<CreateMovimentacao />}
        />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
