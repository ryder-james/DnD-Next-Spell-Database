import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header__img" src="https://i.imgur.com/k7jAoH3.png"></img>
                <input className="header__search" type="text" placeholder="Search Spells..."/>
                {this.props.children}
            </div>
        );
    }
}

export default Header