import React from 'react';
import {connect} from 'react-redux';
import {onChangeFilterValue} from '../../../actions/filterValues/index.actions';

import Navigation from '../../../components/common/Navigation/Navigation';

class NavigationContainer extends React.Component {
    render() {
        return (
            <Navigation
                filterOptionValue={this.props.filterOption}
                onChangeFilterValue={this.props.onChangeFilterValue}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filterOption: state.notes.filterOption
    }
};

export default connect(mapStateToProps, {onChangeFilterValue})(NavigationContainer);
