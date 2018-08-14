import React, { Component } from 'react';
import Scroll from 'react-scroll';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import SpellItem from './spellItem';
import ScrollButton from '../scrollButton';
import SpellDetail from './spellDetail';

const Element = Scroll.Element;
const scroll = Scroll.animateScroll;

class SpellContainer extends Component {
    getSpellArray() {
        const spellArray = [];

        if (this.props.spellList.length == 0) {
            for (let i = 0; i < 14; i++) {
                spellArray.push(<SpellItem spell={null} key={i} />);
            }
        } else {
            this.props.spellList.map((spellItem) => {
                spellArray.push(<SpellItem spell={spellItem} key={spellItem._id} />);
            })
        }

        return spellArray;
    }

    componentDidMount() {
        this.props.fetchSpellList();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchQuery !== this.props.searchQuery) {
            this.props.fetchSpellList(nextProps.searchQuery);
        }
    }

    render() {
        return [
            <div className="spell-container">
                <ScrollButton isScrollUp={true} callback={() => scroll.scrollMore(-650, { containerId: "list" })} />
                <Element className="spell-container__list" id="list">
                    {
                        this.getSpellArray()
                    }
                </Element>
                <ScrollButton isScrollUp={false} callback={() => scroll.scrollMore(650, { containerId: "list" })} />
            </div>,
            <SpellDetail selectedSpell={this.props.selectedSpell} key={this.props.selectedSpell ? this.props.selectedSpell.url : "no-spell"} />
        ];
    }
}

function mapStateToProps(state) {
    const { spellList, selectedSpell, searchQuery } = state.spellList;

    return {
        spellList,
        selectedSpell,
        searchQuery
    }
}

export default connect(mapStateToProps, actions)(SpellContainer);