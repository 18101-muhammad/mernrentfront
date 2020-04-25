import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import headerCar from '../assets/car2.jpg';




import axios from "axios";

class SignInForm extends Component {
    constructor() {
        super();



        this.state = {
            email: '',
            password: ''

        };


        this.handleSubmit = this.handleSubmit.bind(this);



    }

    handleChange(e) {

        e.preventDefault()

        this.setState({
            [e.target.name]: e.target.value
        });
    }




    handleSubmit(e) {
        e.preventDefault();

        axios
            .post("https://mern-stackdev1.herokuapp.com/login", this.state)
            .then(res => {
                console.log(res);
                localStorage.setItem('user_id', res.data._id);
                localStorage.setItem('user_name', res.data.firstName);
                localStorage.setItem('user_email', res.data.email);
                localStorage.setItem('user_role', res.data.user_role);
                if (res.data.user_role === 'customer') {
                    alert("Your Logging Into Customer Account Success");
                    this.props.history.replace('/customer');
                }
                else if (res.data.user_role === 'admin') {
                    alert("Your Logging Into Admin Account Success");
                    this.props.history.replace('/admin');
                } else {
                    alert(res.data);
                }

            });
    }


    render() {

        return (


            <div className="App" id="1">

                <div className="App__Aside" style={{ backgroundImage: `url(${headerCar})`, backgroundColor: 'none' }}>
                </div>
                <div className="App__Form">
                    <div className="PageSwitcher">
                        <NavLink to="/signIn" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>

                    </div>


                    <div className="FormTitle">
                        <NavLink to="/signIn" activeClassName="FormTitle__Link--Active"
                            className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/"
                                activeClassName="FormTitle__Link--Active"
                                className="FormTitle__Link">Sign Up</NavLink>
                    </div>


                    <div className="FormCenter">
                        <form className="FormFields" onSubmit={this.handleSubmit}>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="email">Email</label>
                                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email"
                                    name="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                            </div>

                            <div className="FormField">
                                <label className="FormField__Label" htmlFor="password">Password</label>
                                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password"
                                    name="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
                            </div>


                            <div className="FormField">
                                <button className="FormField__Button mr20">Sign In</button> <Link to="/"
                                    className="FormField__Link">Create an account</Link>
                            </div>

                        </form>

                    </div>

                </div>


            </div>




        );
    }

}



export default SignInForm;
