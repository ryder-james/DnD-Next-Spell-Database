import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            searchValue: ""
        }
    }

    handleChange(e) {
        this.setState({ searchValue: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("trying to search", this.state.searchValue);
    }

    render() {
        return (
            <div className="header">
                {/* <img className="header__img" src="https://i.imgur.com/k7jAoH3.png"/> */}
                <i className="header__icon fab fa-d-and-d"/>
                <form className="header__search-wrapper" onSubmit={() => this.handleSubmit()}>
                    <input 
                        className="header__search-wrapper__search" 
                        type="text" 
                        placeholder="Search Spells..." 
                        value={this.state.searchValue} 
                        onChange={this.handleChange.bind(this)}
                    />
                </form>
                {this.props.children}
            </div>
        );
    }
}

export default Header