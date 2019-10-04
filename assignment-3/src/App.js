import React from "react";
import "./App.css";
import AllProductsPage from "./Component/AllProductsPage.js";
import AllAboutProducts from "./Component/AllAboutProducts.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  console.log(window.location.href);
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              Products Page
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    About <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">
                    Products
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <Route exact path="/" component={AllAboutProducts} />
        <Route path="/products" component={AllProductsPage} />
      </div>
    </Router>
  );
}

export default App;
