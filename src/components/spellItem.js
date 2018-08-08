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
            <a onClick={() => console.log({name}, "detail view clicked")} className="spell-item-wrapper">
                <div className="spell-item">
                    <i className={`spell-item__icon ${icon}`}/>
                    <div className="spell-item__name">{name}</div>
                </div>
            </a>
        );
    }
}

export default SpellItem;