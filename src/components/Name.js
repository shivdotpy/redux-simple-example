import React, {Component} from 'react';
import {connect} from "react-redux";

class Name extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

const mapStateToProps = state => ({
        name: state.name.name
});

export default connect(mapStateToProps,null)(Name);
