import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../themes/style.scss';
class Navigation extends React.Component {
    render() {
        return (

            <div className={`ui menu ${styles.nav}`}>
                <Link to="/" className={`header item ${styles.title}`}>notes+</Link>
                <div className="link item right">
                    <Link to="/new"><div className="ui inverted primary button">New Note</div></Link>
                </div>
            </div>
        )
    }
}
export default Navigation;
