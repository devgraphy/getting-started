import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
class ProductTable extends Component {
    render() {
        const {products} = this.props;
        const productList = [];
        const lastCategory =null;

        products.array.forEach(product => {
            if(products.category !== lastCategory){
                productList.push(
                    <ProductCategoryRow category={product.category}
                )
            }
        })




        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productList}
                </tbody>

            </table>
        );
    }
}

export default ProductTable;