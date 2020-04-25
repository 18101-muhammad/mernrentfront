import React, { Component } from "react";
import axios from "axios";


class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }

    }

    componentDidMount() {

        axios.get('https://mern-stackdev1.herokuapp.com/signup').then(res => {
            console.log(res.data);

            this.setState({ list: res.data });

        }).catch(err => {

        })
    }

    activate(customerId) {

        axios.delete(`https://mern-stackdev1.herokuapp.com/signup/${customerId}`)
            .then(result => {
                if (result.data) {
                    alert("User Deleted Success");
                    this.props.history.replace('/admin');
                }



            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {

        const listItem = this.state.list.map((cst_list, index) =>
            <tr key={index}>
                <td>{cst_list.firstName}</td>
                <td>{cst_list.lastName}</td>
                <td>{cst_list.email}</td>
                <td>{cst_list.address}</td>
                <td><button type="button" className="btn btn-danger" onClick={this.activate.bind(this, cst_list._id)}>Delete</button></td>
            </tr>
        )

        return (

            <div style={{ width: '96%', marginLeft: '2%', marginTop: '2%' }}>

                <h1>Customer List</h1>

                <table className="table table-dark table-hover" style={{ width: '95%' }}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItem}
                    </tbody>
                </table>


            </div>
        )
    }


}

export default UserList;