import React from "react";
import "./App.css";

import Productspage from "./Component/AllProductsPage.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Productspage />
      </div>
    );
  }
}

export default App;
