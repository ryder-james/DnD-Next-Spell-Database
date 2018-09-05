import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { searchDomains } from '../actions/helper';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            searchValue: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ searchValue: e.target.value });
        this.props.changeSelectedSpell(null);
        this.props.searchSpellList(this.state.searchValue, searchDomains.name);
    }

    handleSubmit(e) {
        this.props.changeSelectedSpell(null);
        this.props.searchSpellList(this.state.searchValue, searchDomains.name);
        e.preventDefault();
    }

    render() {
        return (
            <div className="header">
                {/* <img className="header__img" src="https://i.imgur.com/k7jAoH3.png"/> */}
                <i className="header__icon fab fa-d-and-d"/>
                <form className="header__search-wrapper" onSubmit={this.handleSubmit}>
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

export default connect(null, actions)(Header)