import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import SpellItem from './spellItem';
import ScrollButton from './scrollButton';

class SpellContainer extends Component {
    constructor() {
        super();

        this.state = {
            spellList: []
        }
    }

    componentDidMount() {
        this.props.fetchSpellList();

        console.log(fetch("http://dnd5eapi.co/api/spells/", { headers: { "Content-Type": "application/json" } }));
    }

    render() {
        return (
            <div className="spell-container">
                <div className="spell-container__list">
                    <ScrollButton isScrollUp={true} callback={() => console.log("Scrolling up")}/>
                    {
                        this.props.spellList.map(spellItem => {
                            return <SpellItem {...spellItem} key={spellItem._id}/>
                        }) 
                    }
                    <ScrollButton isScrollUp={false} callback={() => console.log("Scrolling down")}/>
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