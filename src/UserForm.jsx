import React, { Component } from "react";
import "./form.css";

class UserForm extends Component {
  state = {
    name: "",
    student: false,
    occupation: { value: "berlin" },
    about: "",
  };

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    const val = type === "checkbox" ? checked : value;

    this.setState({
      [name]: val,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form className="login_form" onSubmit={this.handleSubmit}>
        <h1 className="form__title">Profile</h1>
        <div className="form-control">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="student" className="form__label">
            Student
          </label>
          <input
            className="form__input"
            type="checkbox"
            id="student"
            name="student"
            value={this.state.student}
            onChange={this.handleChange}
          />
        </div>
        
        <div className="form-control">
          <label htmlFor="occupation" className="form__label" id="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            value={this.state.occupation.value}
            onChange={this.handleChange}
            className="form__input"
          >
            <option value="london">London</option>
            <option value="new-york">New-York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="about" className="form__label" id="about">
            About
          </label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            className="form__input"
            value={this.state.about}
            onChange={this.handleChange}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
