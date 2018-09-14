import React, { Component } from 'react'
class Blue extends Component{
    render() {
        return (
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        )
    }
}
export default Blue