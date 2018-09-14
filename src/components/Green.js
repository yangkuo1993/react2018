import React, { Component } from 'react';
import Red from './Red';
import Blue from './Blue'
class Green extends Component {
    render() {
        let rows = [];
        var lastCategory = null;
        this.props.products.forEach((product) => {
            if ((product.name.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 && product.price.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 )
            || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<Blue category={product.category} key={product.category}></Blue>);
            }
            rows.push(<Red product={product} key={product.name}></Red>);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}
export default Green