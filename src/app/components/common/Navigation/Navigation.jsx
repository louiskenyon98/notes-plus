import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../../../../themes/style.scss';
import SelectContainer from '../../../containers/common/formFields/SelectContainer';

class Navigation extends React.PureComponent {
    render() {
        return (
            <div className={`ui menu ${styles.nav}`}>
                <Link to="/" className={`header item ${styles.title}`}>notes+</Link>
                {/*Select*/}
                <SelectContainer />
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
