import React from "react";
import ProductList from "./ProductsList";
import axios from "axios";

class AllProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
        };
    }
    componentWillMount () {
        axios.get("http://localhost:3000/products").then(
            (Response) => {
                this.setState({
                    products: Response.data,
                });
            }
        );
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