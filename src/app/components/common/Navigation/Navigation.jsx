import React from 'react';
import {Link} from 'react-router-dom';
import {filterOptions} from '../../../config/filterOptions';
import Select from '../formFields/Select';

import styles from '../../../../themes/style.scss';

class Navigation extends React.PureComponent {
    render() {
        return (

            <div className={`ui menu ${styles.nav}`}>
                <Link to="/" className={`header item ${styles.title}`}>notes+</Link>
                {/*<div className="item">*/}
                    {/*<Select/>*/}
                {/*</div>*/}
                <Select
                    options={filterOptions}
                    value={this.props.filterOptionValue}
                    onChange={this.props.onChangeFilterValue}
                />


                {/*<option></option>*/}
                {/*<option>Last edited</option>*/}
                <div className="link item right">
                    <Link to="/new">
                        <div className="ui inverted primary button">New Note</div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navigation;
