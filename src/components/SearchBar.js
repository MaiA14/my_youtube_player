import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core';
import searchSvg from '../assets/imgs/icons/icons8-search.svg'

class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        const fieldValue = event.target.value;
        this.setState({ searchTerm: fieldValue });
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    render() {
        return (
            <Paper elevation={6} className="search-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="flex">
                    <input type="text" placeholder="Search..."
                        onChange={this.handleChange} />
                    <button onSubmit={this.handleSubmit}>
                        <img src={searchSvg}></img>
                    </button>
                    </div>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;
