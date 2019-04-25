import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Select from '../../../../components/common/formFields/Select';
import {filterOptions} from '../../../../config/filterOptions';

import {onChangeFilterValue} from '../../../../actions/filterValues/index.actions';


export class SelectContainer extends React.Component {
    render() {
        return (
            <Select
                options={filterOptions}
                value={this.props.filterOption}
                onChange={this.props.onChangeFilterValue}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filterOption: state.notes.filterOption
    }
};

SelectContainer.propTypes = {
    filterOption: PropTypes.string,
    onChangeFilterValue: PropTypes.func
};

export default connect(mapStateToProps, {onChangeFilterValue})(SelectContainer);
