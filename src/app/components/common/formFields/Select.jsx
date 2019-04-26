import React from 'react';

class Select extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(e.target.value);
    }

    returnOptions() {
        const {options} = this.props;
        if(Array.isArray(options) && options.length) {
            return options.map(e => {
                return (
                    <option key={e.value} value={e.value}>{e.label}</option>
                );
            });
        }
    }

    render() {
        return (
            <select value={this.props.value} onChange={this.onChange}>
                {this.returnOptions()}
            </select>
        )
    }
}

export default Select;
