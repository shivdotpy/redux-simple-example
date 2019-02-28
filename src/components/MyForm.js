import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeName} from "../actions/nameAction";

class MyForm extends Component {

    changeNames = (e) => {
        console.log(e.target.value)
        this.props.changeName(e.target.value)
    };

    render() {
        return (
            <div className="form-group">
                <input type="text" placeholder="Name" className="form-control" onChange={this.changeNames}/>
                <input type="text" placeholder="Email" className="form-control"/>
                <input type="text" placeholder="Password" className="form-control"/>
            </div>
        );
    }
}

export default connect(null, {changeName})(MyForm);
