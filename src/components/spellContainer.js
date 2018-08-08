import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import SpellItem from './spellItem';

class SpellContainer extends Component {
    constructor() {
        super();

        this.state = {
            spellList: []
        }
    }

    componentDidMount() {
        this.props.fetchSpellList();
    }

    render() {
        return (
            <div className="spell-container">
                <div className="spell-container__list">
                    {
                        this.props.spellList.map(spellItem => {
                            return <SpellItem {...spellItem} key={spellItem._id}/>
                        }) 
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { spellList } = state.spellList;

    return {
        spellList
    }
}

export default connect(mapStateToProps, actions)(SpellContainer);