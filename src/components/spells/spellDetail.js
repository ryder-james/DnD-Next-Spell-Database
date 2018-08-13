import React, { Component } from 'react';

import axios from 'axios';

class SpellDetail extends Component {
    countWords(s) {
        s = s.replace(/(^\s*)|(\s*$)/gi, "");
        s = s.replace(/[ ]{2,}/gi, " ");
        s = s.replace(/\n /, "\n");
        return s.split(' ').filter((str) => { return str != "" }).length;
    }

    fixText(textToFix) {
        let result = "";

        if (Array.isArray(textToFix)) {
            textToFix.map((line, index) => {
                line = line.replace(/â€™/g, "’");
                line = line.replace(/â€./g, "");

                if (this.countWords(line) < 3) {
                    line = line.replace(/\./gi, "");
                    result += " - " + line + " - ";
                } else {
                    result += line;
                }

                if (index != textToFix.length - 1) {
                    result += "\n";
                }
            });
        } else {
            textToFix = textToFix.replace(/â€™/g, "’");
            textToFix = textToFix.replace(/â€./g, "");
            result += textToFix;
        }

        return result;
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
                result += ` (${this.fixText(this.props.selectedSpell.material)})`;
            }
            if (index != componentList.length - 1) {
                result += ", ";
            }
        })
        return result;
    }

    levelToString(level, school) {
        let result = level;

        if (result > 0) {
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
            result += " level " + school;
        } else {
            result = school + " cantrip";
        }

        return result;
    }

    render() {
        if (!this.props.selectedSpell) {
            return (
                <div className="spell-detail-none"> No spell selected. Click one on the left to start!</div>
            )
        }

        const spell = { ...this.props.selectedSpell };

        return (
            <div className="spell-detail">
                <div className="spell-detail__name">{spell.name}</div>
                <div className="spell-detail__wrapper">
                    <div className="spell-detail__wrapper__level"><i>{this.levelToString(spell.level, spell.school.name)}</i></div>
                    <div className="spell-detail__wrapper__cast-time"><b>Casting Time: </b>{spell.casting_time}</div>
                    <div className="spell-detail__wrapper__range"><b>Range: </b>{spell.range}</div>
                    <div className="spell-detail__wrapper__components"><b>Components: </b>{this.componentListToString(spell.components)}</div>
                    <div className="spell-detail__wrapper__duration"><b>Duration: </b>{spell.duration}</div>
                    <div className="spell-detail__wrapper__classes"><b>Classes: </b>{this.classListToString(spell.classes)}</div>
                </div>
                <div className="spell-detail__desc-wrapper">
                    <div className="spell-detail__desc-wrapper__description">{this.fixText(spell.desc)}</div>
                    {
                        spell.higher_level ?
                            <div className="spell-detail__desc-wrapper__higher-levels">
                                <b>At Higher Levels: </b>{this.fixText(spell.higher_level)}
                            </div>
                            : ""
                    }
                </div>
            </div>
        );
    }
}

export default SpellDetail;