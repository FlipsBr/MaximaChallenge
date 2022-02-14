import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login/Login";

//const [loggedIn, setLoggedIn] = useState(false);

function App() {
  return (
    <div>
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
      <Login />
    </div>
  );
}
export default App;

/*
class App extends Component {
  render() {
    return (
      <div>
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
        <Login />
      </div>
    );
  }
}
export default App;

*/

/*
return (
      <div className="App">
        <header className="App-header">
          <img src={logos} className="App-logo" alt="logo" />
          <p>
            {"Learn "}
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            {", "}
            <a
              href="https://expressjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Express
            </a>
            {", and "}
            <a
              href="https://kubernetes.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kubernetes
            </a>
          </p>
          <p>
            Modify <code>src/www/App.js</code> or <code>src/api/index.js</code>{" "}
            to reload UI or API.
          </p>
          <p>
            <code>yarn deploy</code> to build containers and deploy them to
            production
          </p>
          <hr />
          <h2>Count: {this.state.count}</h2>
          <p>
            Call <code>/api/count/increment</code>
            <button onClick={this.increment} className="App-button">
              Go
            </button>
          </p>
        </header>
      </div>


*/
