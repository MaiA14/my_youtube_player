import React, { Component } from 'react';
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
            <div className="search-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="flex">
                    <input type="text" id="search" placeholder="Search..."
                        onChange={this.handleChange} />
                    <button onSubmit={this.handleSubmit}>
                        <img src={searchSvg} width="24px" style={{padding: '2px'}}></img>
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
