import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../../../themes/style.scss';

class Navigation extends React.PureComponent {
    render() {
        return (

            <div className={`ui menu ${styles.nav}`}>
                <Link to="/" className={`header item ${styles.title}`}>notes+</Link>
                <div className="link item right">
                    <div className="ui simple dropdown item">
                        Filter Notes
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item">Most recent created first</div>
                            <div className="item">Most recent edit first</div>
                        </div>
                    </div>
                    <Link to="/new">
                        <div className="ui inverted primary button">New Note</div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navigation;
