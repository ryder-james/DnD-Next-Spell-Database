import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class SpellDetail extends Component {
    render() {
        return (
            <div className="spell-detail">
                <div className="spell-detail__name"></div>
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
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, actions)(SpellDetail);