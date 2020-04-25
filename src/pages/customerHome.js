import React, { Component } from "react";
import axios from "axios";


class CustomerHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }

    }

    componentDidMount() {

        axios.get('https://mern-stackdev1.herokuapp.com/cars').then(res => {
            console.log(res.data);

            this.setState({ list: res.data });

        }).catch(err => {

        })
    }

    bookCar(carId) {
        var customerId = localStorage.getItem('user_id');
        axios.post(`https://mern-stackdev1.herokuapp.com/carBooking/${customerId}/${carId}`)
            .then(result => {
                console.log(result.data);
                alert("Car Booking Register Success");

            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (

            <div style={{ width: '96%', marginLeft: '2%', marginTop: '2%' }}>
                <h1 style={{ marginLeft: '10%' }}>Cars</h1>
                <div className='row' style={{ width: '80%', marginLeft: '10%', backgroundColor: '#8b8bbb' }}>
                    {this.state.list.map((car, index) =>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 card" key={index} style={{ backgroundColor: '#8b8bbb' }}>
                            <div style={{ width: '100%', marginTop: '10px', marginBottom: '10px', border: '1px solid black', borderRadius: '5px', backgroundColor: '#8a899e' }}>
                                <img className="card-img-top" src={`https://mern-stackdev1.herokuapp.com/${car.carImage}`} alt="Car Image" width='400px' height='300px' />
                                <div className="card-body">
                                    <h4 className="card-title">Conmpany:    {car.company}</h4>
                                    <h5 className="card-text">Model:    {car.model}</h5>
                                    <p className="card-text">Rent:    {car.rent}/per hour</p>
                                    <a href="#" className="btn btn-primary" onClick={this.bookCar.bind(this, car._id)}>Book Now</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        )
    }


}

export default CustomerHome;