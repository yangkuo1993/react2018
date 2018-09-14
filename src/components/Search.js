import React, { Component } from 'react'
class Search extends Component{
    handerTextChange = (e) => {
        this.props.textchange(e.target.value)
    }
    handleCheckChange = (e) => {
        this.props.checkboxChange(e.target.checked)
    }
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." onChange={this.handerTextChange} value={this.props.textValue}></input>
                <br></br>
                <input type="checkbox" checked={this.props.isOnly} onChange={this.handleCheckChange}></input>Only show products in stock
            </form>
        )
    }
}
export default Search