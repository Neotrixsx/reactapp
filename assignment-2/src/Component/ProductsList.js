import React from "react";
import Product_row from "./Product.js";
import "bootstrap/dist/css/bootstrap.min.css";

class ProductsList extends React.Component {
  render() {
    const productlists = this.props.productlists;
    return (
      <div>
        <h1>The Products Table is :-</h1>
        <table className="table">
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {productlists.map(products => {
            return <Product_row {...products} />;
          })}
        </table>
      </div>
    );
  }
}

export default ProductsList;
