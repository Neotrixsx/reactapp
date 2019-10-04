import React from "react";
import productdata from "../json/products.json";
import ProductList from "./ProductsList";

class AllProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
        };
    }
    componentWillMount () {
        this.setState({
            products: productdata,
        });
    }

    render() {
        return (
            <div>
                <ProductList 
                    productlists = {this.state.products}
                />
            </div>
        );
    }
}

export default AllProductsPage;