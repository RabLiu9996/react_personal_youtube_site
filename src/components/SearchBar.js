import React from 'react';

class SearchBar extends React.Component {

    state = { searchTerm: 'Search video by keywords...' };

    onInpurChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();//prevent when user hit enter the page will be rerendered
    }

    render() {
        return (
            <div className=" search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.searchTerm}
                            onChange={this.onInpurChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;