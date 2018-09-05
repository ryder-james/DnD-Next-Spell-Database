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
    constructor() {
        super();

        this.state = {
            noResult: false
        }
    }

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

    componentWillReceiveProps(nextProps) {
        this.setState({ noResult: nextProps.spellList[0] == "no-result" });
    }

    render() {
        return [
            <div className="spell-container">
                <ScrollButton isScrollUp={true} callback={() => scroll.scrollMore(-650, { containerId: "list" })} />
                <Element className="spell-container__list" id="list">
                    {
                        this.state.noResult ? <div className="spell-container__no-result">No results</div> : this.getSpellArray()
                    }
                </Element>
                <ScrollButton isScrollUp={false} callback={() => scroll.scrollMore(650, { containerId: "list" })} />
            </div>,
            <SpellDetail selectedSpell={this.props.selectedSpell} key={this.props.selectedSpell ? this.props.selectedSpell.url : "no-spell"} />
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