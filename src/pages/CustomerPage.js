import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CustomerHeader from './customerHeader';
import CustomerHome from './customerHome';


class CustomerPage extends Component {

    constructor() {
        super()
        this.logout = this.logout.bind(this);


    }

    logout() {

        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_role');
        this.props.history.replace('/signIn');
    }

    componentDidMount() {

        var userrole = localStorage.getItem('user_role');
        if (userrole !== 'customer') {
            alert('You have invalid account type, please login..');
            this.props.history.replace('/signIn');
        }
    }

    render() {
        return (
            <Router>
                <div className="app header-fixed footer-fixed" style={{ backgroundColor: '#8a8a9e', height: '100%' }}>
                    <div>
                        <header className="app-header navbar">
                            <CustomerHeader />
                            <button className="btn btn-light" onClick={this.logout} style={{ position: 'absolute', left: '46%' }}>LogOut</button>
                        </header>
                        <div className="app-body " >
                            <main className="main" >
                                <Switch>
                                    <Route path="/customer/home" name="Admin User List" component={CustomerHome} />
                                    <Redirect from='/customer' to='/customer/home' />
                                </Switch>
                            </main>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }


}

export default CustomerPage;