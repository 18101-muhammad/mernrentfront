import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import headerCar from '../assets/car2.jpg';


class SignUpForm extends Component {

  constructor() {
    super()

    this.state = {
      lname: '',
      fname: '',
      password: '',
      email: '',
      address: '',
      user_role: 'customer'
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

    console.log(this.state);

    axios
    // https://mern-stackdev1.herokuapp.com/
      .post("https://mern-stackdev1.herokuapp.com/signup/", this.state)
      .then(res => {
        if (res.data) {
          alert("User Register Success");
          this.props.history.replace('/signIn');
        }
        console.log(res);
        console.log(res.data);
      }).catch(err => {
        alert("Somthing went wrong");
      }
      );



  }

  render() {

    return (
      <div className="App">
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
                <label className="FormField__Label" htmlFor="fname">First Name</label>
                <input type="text" id="fname" className="FormField__Input" placeholder="Enter your firstname"
                  name="fname" value={this.state.fname} onChange={this.handleChange.bind(this)} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="lname">Last Name</label>
                <input type="text" id="lname" className="FormField__Input" placeholder="Enter your lasttname"
                  name="lname" value={this.state.lname} onChange={this.handleChange.bind(this)} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password"
                  name="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Email</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email"
                  name="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="address">Address</label>
                <input type="text" id="address" className="FormField__Input" placeholder="Enter your address"
                  name="address" value={this.state.address} onChange={this.handleChange.bind(this)} />
              </div>

              {/* <div className="FormField">
                  <label className="FormField__Label" htmlFor="user_role">User Role</label>
                  <select value={this.state.user_role} id="user_role" name="user_role" onChange={this.handleChange.bind(this)}>
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                  </select>
                  </div>   */}



              <div className="FormField">
                <button className="FormField__Button mr20">Sign Up</button> <Link to="/signIn"
                  className="FormField__Link">I am already member</Link>
              </div>

            </form>

          </div>

        </div>


      </div>



    );
  }

}



export default SignUpForm;