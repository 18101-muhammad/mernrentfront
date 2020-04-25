import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AdminHeader from './adminHeader';
import UserList from './Userlist';
import AddCar from './addCarForm';
import Booking from './BookingNotify';


class AdminPage extends Component {

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
        if (userrole !== 'admin') {
            alert('You have invalid account type, please login..');
            this.props.history.replace('/signIn');
        }
    }

    render() {
        return (
            <Router>
                <div className="app header-fixed footer-fixed" style={{ backgroundColor: '#8a8a9e', height: '1000px' }}>
                    <div>
                        <header className="app-header navbar">
                            <AdminHeader />
                            <button className="btn btn-light" onClick={this.logout} style={{ position: 'absolute', left: '46%' }}>LogOut</button>
                        </header>
                        <div className="app-body " >
                            <main className="main" >
                                <Switch>
                                    <Route path="/admin/userlist" name="Admin User List" component={UserList} />
                                    <Route path="/admin/addcar" name="Admin User List" component={AddCar} />
                                    <Route path="/admin/booking" name="Admin User List" component={Booking} />
                                    <Redirect from='/admin' to='/admin/userlist' />
                                </Switch>
                            </main>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }


}

export default AdminPage;