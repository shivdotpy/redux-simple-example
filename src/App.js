import React, {Component} from 'react';
import MyForm from "./components/MyForm";
import Name from "./components/Name";
import Email from "./components/Email";
import Password from "./components/Password";

import {connect} from "react-redux";
import {changeName} from "./actions/nameAction";

class App extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center p-5 border mt-3">
                        <MyForm/>
                    </div>
                    <div className="col-md-6 text-center p-5 border mt-3">
                        <Name/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6  text-center p-5 border mt-3">
                        <Email/>
                    </div>
                    <div className="col-md-6  text-center p-5 border mt-3">
                        <Password/>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(null, {changeName})(App);
