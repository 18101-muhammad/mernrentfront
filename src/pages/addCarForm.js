import React, { Component } from "react";
import axios from "axios";

class AddCar extends Component {

  constructor() {
    super()

    this.state = {
      company: '',
      model: '',
      rent: '',
      carImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);


  }



  handleChange(e) {

    e.preventDefault()
    console.log(e.target.files)
    if (e.target.files) {
      this.setState({ carImage: e.target.files[0] });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });

    }




  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state);

    let formData = new FormData();


    formData.append('company', this.state.company);
    formData.append('model', this.state.model);
    formData.append('rent', this.state.rent);
    formData.append('carImage', this.state.carImage);

    console.log(formData);

    axios({
      url: 'https://mern-stackdev1.herokuapp.com/cars',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    }).then(res => {
      console.log(res);
      console.log(res.data);
      if (res.data) {
        this.setState({
          company: '',
          model: '',
          rent: '',
          carImage: null,
        })
        alert("Car Register SuccessFully");
      }
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: '#191923', width: '55%', marginLeft: '15%', marginTop: '2%', padding: '20px' }}>
        <div className="FormTitle">
          <h2 style={{ textAlign: 'center' }}>Add Car Form</h2>
        </div>


        <div className="FormCenter">
          <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="company">Company</label>
              <input type="text" id="company" className="FormField__Input" placeholder="Enter Car Company Name"
                name="company" value={this.state.company} onChange={this.handleChange.bind(this)} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="model">Model</label>
              <input type="text" id="model" className="FormField__Input" placeholder="Enter Car Model"
                name="model" value={this.state.model} onChange={this.handleChange.bind(this)} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="rent">Rent</label>
              <input type="text" id="rent" className="FormField__Input" placeholder="Enter Rent"
                name="rent" value={this.state.rent} onChange={this.handleChange.bind(this)} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="carImage">Car Image</label>
              <input type="file" id="carImage" className="FormField__Input" placeholder="Enter your address"
                name="carImage" value={this.state.address} onChange={this.handleChange.bind(this)} />
            </div>



            <div className="FormField">
              <button className="FormField__Button mr20">Add</button>
            </div>

          </form>

        </div>
      </div>
    );
  }


}

export default AddCar;