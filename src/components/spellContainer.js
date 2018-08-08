import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import SpellItem from './spellItem';
import ScrollButton from './scrollButton';

class SpellContainer extends Component {
    getSpellArray() {
        if (this.props.spellList.length == 0) {
            return [];
        }
        console.log("getting spell array")

        const spellArray = [];
        this.props.spellList.map(() => {
            spellArray.push(<SpellItem/>);
        })
        return spellArray;
    }

    componentDidMount() {
        this.props.fetchSpellList();
    }

    render() {
        return (
            <div className="spell-container">
                <div className="spell-container__list">
                    <ScrollButton isScrollUp={true} callback={() => console.log("Scrolling up")}/>
                    {
                        this.getSpellArray()
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