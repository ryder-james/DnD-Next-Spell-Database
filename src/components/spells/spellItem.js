import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';

class SpellItem extends Component {
    constructor() {
        super();

        this.state = {
            spell: null
        }
    }

    componentDidMount() {
        axios.get(this.props.url)
            .then(response => {
                this.setState({ spell: {...response.data} });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        if (!this.state.spell) {
            return (
                <div className="spell-item">
                    <i className={`spell-item__icon fas fa-question`} />
                    <div className="spell-item__name">Fetching spell...</div>
                </div>
            )
        }

        let active = false

        if (this.props.url == this.props.selectedSpell) {
            active = true;
        }

        const {
            name,
            school
        } = this.state.spell;

        const icons = {
            abjuration: "fas fa-shield-alt",
            conjuration: "fab fa-hornbill",
            divination: "fas fa-magic",
            enchantment: "fas fa-diagnoses",
            evocation: "fas fa-fire",
            illusion: "fas fa-low-vision",
            necromancy: "fas fa-skull",
            transmutation: "fas fa-sync-alt"
        }

        let icon = icons.evocation

        switch (school.name) {
            case "Abjuration":
                icon = icons.abjuration;
                break;
            case "Conjuration":
                icon = icons.conjuration;
                break;
            case "Divination":
                icon = icons.divination;
                break;
            case "Enchantment":
                icon = icons.enchantment;
                break;
            case "Evocation":
                icon = icons.evocation;
                break;
            case "Illusion":
                icon = icons.illusion;
                break;
            case "Necromancy":
                icon = icons.necromancy;
                break;
            case "Transmutation":
                icon = icons.transmutation;
                break;
        }

        return (
            <a onClick={() => this.props.changeSelectedSpell(this.props.url)} className="spell-item-wrapper">
                <div className={`spell-item ${active ? "active" : ""}`}>
                    <i className={`spell-item__icon  ${active ? "active__icon" : ""} ${icon}`} />
                    <div className="spell-item__name">{name}</div>
                    {active ? <i className="spell-item__arrow fas fa-caret-right"/> : ""}
                </div>
            </a>
        );

    }
}

function mapStateToProps(state) {
    const { selectedSpell } = state.spellList;

    return {
        selectedSpell
    }
}

export default connect(mapStateToProps, actions)(SpellItem);