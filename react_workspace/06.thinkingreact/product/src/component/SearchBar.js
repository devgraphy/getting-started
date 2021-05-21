import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        const {filterText, inStockOnly} = this.props;
        return (
            <from>
                <input type="text" placeholder="Search..."
                value={filterText}
                onChange={(event)=>handleFilterTextChange(even.target.value)}
                />
                <p>
                    <input type="checkbox"/> &nbsp; &nbsp;
                    Only show products in stock
                </p>
            </from>
        );
    }
}

export default SearchBar;