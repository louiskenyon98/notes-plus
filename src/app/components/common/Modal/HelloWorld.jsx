import React from 'react';

export default class HelloWorld extends React.PureComponent {
    render() {
        return (
            <div>
                {this.props.message}
            </div>
        )
    }
}
