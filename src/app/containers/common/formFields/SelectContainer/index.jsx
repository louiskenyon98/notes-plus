import React from 'react';
import {connect} from 'react-redux';
import Select from '../../../../components/common/formFields/Select';
import {filterOptions} from '../../../../config/filterOptions';

import {onChangeFilterValue} from '../../../../actions/filterValues/index.actions';


class SelectContainer extends React.Component {
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
export default connect(mapStateToProps, {onChangeFilterValue})(SelectContainer);
