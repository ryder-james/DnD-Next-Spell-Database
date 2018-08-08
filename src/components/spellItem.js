import React, { Component } from 'react';

class SpellItem extends Component {
    render() {
        const {
            name, 
            desc, 
            higher_level, 
            range, 
            components, 
            material, 
            ritual,
            duration, 
            concentration, 
            casting_time, 
            level, 
            school, 
            classes, 
            subclasses, 
            url
        } = this.props;

        return (
            <div className="spell-item">
                <div className="spell-item__name">{name}</div>
            </div>
        );
    }
}

export default SpellItem;