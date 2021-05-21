import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
class FilterableProductTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterText : '',
            inStockOnly : false,
        }
    }
    handleFilterTextChange = (changeText)=>{
        this.setState({
            filterText : changeText,
        });
    }
    handleInStockChange = (stocked) => {
        this.setState({

        });
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                            inStockOnly = {this.state.inStockOnly}/>
                <ProductTable products={this.props.products}
                                filterText/>

            </div>
        );
    }
}

export default FilterableProductTable;