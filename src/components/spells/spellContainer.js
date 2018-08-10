import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import SpellItem from './spellItem';
import ScrollButton from '../scrollButton';
import SpellDetail from './spellDetail';

class SpellContainer extends Component {
    getSpellArray() {
        if (this.props.spellList.length == 0) {
            return [];
        }

        const spellArray = [];
        this.props.spellList.map((spellItem, index) => {
            spellArray.push(<SpellItem url={spellItem.url} key={index}/>);
        })

        return spellArray;
    }

    componentDidMount() {
        this.props.fetchSpellList();
    }

    render() {
        return [
            <div className="spell-container">
                <ScrollButton isScrollUp={true} callback={() => console.log("Scrolling up")}/>
                <div className="spell-container__list">
                    {
                        this.getSpellArray()
                    }
                </div>
                <ScrollButton isScrollUp={false} callback={() => console.log("Scrolling down")}/>
            </div>,
            <SpellDetail selectedSpell={this.props.selectedSpell} key={this.props.selectedSpell}/>
        ];
    }
}

function mapStateToProps(state) {
    const { spellList, selectedSpell } = state.spellList;

    return {
        spellList,
        selectedSpell
    }
}

export default connect(mapStateToProps, actions)(SpellContainer);