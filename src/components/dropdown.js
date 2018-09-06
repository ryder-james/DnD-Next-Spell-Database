import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Select from 'react-select';


class DropdownMenu extends Component {
    optionsFromArray(arr) {
        const options = [];
        
        arr.forEach(element => {
            options.push({ value: element.toLowerCase(), label: element });
        });

        return options;
    }

    handleChange = (selectedOptions) => {
        this.props.search(selectedOptions, this.props.searchDomain);
    }

    render() {
        return (
            <Select
                isMulti
                isClearable
                name={this.props.name}
                options={this.optionsFromArray(this.props.options)}
                className="multi-filter"
                classNamePrefix="select"
                onChange={this.handleChange}
                placeholder={this.props.placeholder}
            />
        );
    }
}

export default connect(null, actions)(DropdownMenu);