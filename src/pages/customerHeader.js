import React, { Component } from "react";
import { Link } from "react-router-dom";
import customerImage from '../assets/customer.png';



class CustomerHeader extends Component {

    render() {
        return (
            <div style={{ width: '100%' }}>
                <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#8b8bbb' }}>
                    <Link to='/customer' className="navbar-brand" >
                        <img src={customerImage} width="30" height="30" alt="" style={{ borderRadius: '50px' }} />
                Customer
            </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to='/customer/home' className="nav-link">Home</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }


}

export default CustomerHeader;