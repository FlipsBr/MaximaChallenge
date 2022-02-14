import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, IndexRoute } from "react-router-dom";
import store from "./Store/store.js";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import FrontPage from "./Pages/FrontPage/FrontPage";
import Balance from "./Pages/Balance/Balance.jsx";
import CreateUser from "./Pages/CreateUser/CreateUser";
import CreateMovimentacao from "./Pages/Movimentacao/Movimentacao";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-movimentacao" element={<CreateMovimentacao />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
