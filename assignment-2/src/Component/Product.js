import React from "react";

const Product = ({ ID, Product_Name, Quantity, Price }) => {
  return (
    <tr>
      <td>{ID}</td>
      <td>{Product_Name}</td>
      <td>{Quantity}</td>
      <td>{Price}</td>
    </tr>
  );
};

export default Product;
