import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { queryEditor } from '../actions/helper';
import DropdownMenu from './dropdown';

import { classList, searchDomains } from '../constants';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            searchValue: ""
        }
    }

    handleChange(e) {
        this.setState({ searchValue: e.target.value });

        const spell = this.props.selectedSpell;

        if (spell && !spell.name.includes(queryEditor(e.target.value))) {
            this.props.changeSelectedSpell(null);
        }

        this.props.searchSpellList(e.target.value, searchDomains.name);
    }

    render() {
        return (
            <div className="header">
                {/* <img className="header__img" src="https://i.imgur.com/k7jAoH3.png"/> */}
                <i className="header__icon fab fa-d-and-d"/>
                <form className="header__search-wrapper">
                    <input 
                        className="header__search-wrapper__search" 
                        type="text" 
                        placeholder="Search Spells..." 
                        value={this.state.searchValue} 
                        onChange={this.handleChange.bind(this)}
                    />
                </form>
                <DropdownMenu
                    name="class-filter"
                    search={this.props.searchSpellList}
                    options={classList}
                    searchDomain={searchDomains.classes}
                    placeholder="Class select"
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { selectedSpell } = state.spellList;

    return {
        selectedSpell
    }
}

export default connect(mapStateToProps, actions)(Header)