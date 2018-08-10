import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';

class SpellDetail extends Component {
    constructor() {
        super();

        this.state = {
            spell: null
        }
    }

    classListToString(classList) {
        let result = "";
        classList.map((className, index) => {
            result += className.name;
            if (index != classList.length - 1) {
                result += ", ";
            }
        })
        return result;
    }

    componentListToString(componentList) {
        let result = "";
        componentList.map((component, index) => {
            result += component;
            if (component == "M") {
                result += ` (${this.state.spell.material})`;
            }
            if (index != componentList.length - 1) {
                result += ", ";
            }
        })
        return result;
    }

    levelToString(level) {
        let result = level;
        let lastDigit = level % 10;
        let lastTwoDigits = level % 100;
        if (lastDigit == 1 && lastTwoDigits != 11) {
            result += "st";
        } else if (lastDigit == 2 && lastTwoDigits != 12) {
            result += "nd";
        } else if (lastDigit == 3 && lastTwoDigits != 13) {
            result += "rd";
        } else {
            result += "th"
        }
        return result;
    }


    componentDidMount() {
        axios.get("http://www.dnd5eapi.co/api/spells/1")
            .then(response => {
                this.setState({ spell: { ...response.data } })
            })
    }

    render() {
        if (!this.state.spell) {
            return (
                <div className="spell-detail">
                    <div className="spell-detail__name">Fetching...</div>
                    <div className="spell-detail__wrapper">
                        <div className="spell-detail__wrapper__level"> level </div>
                        <div className="spell-detail__wrapper__cast-time"><b>Casting Time: </b></div>
                        <div className="spell-detail__wrapper__range"><b>Range: </b></div>
                        <div className="spell-detail__wrapper__components"><b>Components: </b></div>
                        <div className="spell-detail__wrapper__duration"><b>Duration: </b></div>
                        <div className="spell-detail__wrapper__classes"><b>Classes: </b></div>
                    </div>
                    <div className="spell-detail__desc-wrapper">
                        <div className="spell-detail__desc-wrapper__description"></div>
                        <div className="spell-detail__desc-wrapper__higher-levels"><b>At Higher Levels: </b></div>
                    </div>
                </div>
            )
        }

        const spell = { ...this.state.spell };

        console.log(spell);

        return (
            <div className="spell-detail">
                <div className="spell-detail__name">{spell.name}</div>
                <div className="spell-detail__wrapper">
                    <div className="spell-detail__wrapper__level"><i>{this.levelToString(spell.level)} level {spell.school.name}</i></div>
                    <div className="spell-detail__wrapper__cast-time"><b>Casting Time: </b>{spell.casting_time}</div>
                    <div className="spell-detail__wrapper__range"><b>Range: </b>{spell.range}</div>
                    <div className="spell-detail__wrapper__components"><b>Components: </b>{this.componentListToString(spell.components)}</div>
                    <div className="spell-detail__wrapper__duration"><b>Duration: </b>{spell.duration}</div>
                    <div className="spell-detail__wrapper__classes"><b>Classes: </b>{this.classListToString(spell.classes)}</div>
                </div>
                <div className="spell-detail__desc-wrapper">
                    <div className="spell-detail__desc-wrapper__description">{spell.desc}</div>
                    {
                        spell.higher_level ?
                            <div className="spell-detail__desc-wrapper__higher-levels">
                                <b>At Higher Levels: </b>{spell.higher_level}
                            </div>
                            : ""
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, actions)(SpellDetail);