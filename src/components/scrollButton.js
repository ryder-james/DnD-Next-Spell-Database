import React, { Component } from 'react';

class ScrollButton extends Component {
    render() {
        const { isScrollUp, callback } = this.props;
        return (
            <a onClick={callback} className={`scroll-button ${isScrollUp ? "" : "scroll-down"}`}>
                <i className="fas fa-angle-up"/>
            </a>
        );
    }
}

export default ScrollButton;