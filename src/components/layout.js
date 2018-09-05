import React, { Component } from 'react';
import Header from './header';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Layout extends Component {
    componentDidMount() {
        this.props.fetchSpellList();
    }

    render() {
        return (
            <div className="layout">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default connect(null, actions)(Layout);