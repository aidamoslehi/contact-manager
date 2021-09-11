import "./contact.css";
import React, { Component } from "react";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AddContact: "",
      users: [
        { name: "James Smith", href: "" },
        { name: "Thomas Anderson", href: "" },
        { name: "Bruce Wayne", href: "" },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Event For Input
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // Event For Submit
  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    const newUser = {name: this.state.AddContact, href: ""}
    this.setState({users: [...this.state.users, newUser]})


    // The Second Soloution
 //clone
//  const users=[...this.state.users];

 //push new user
//  users.push({name:this.state.AddContact,href:''})

 //update state
//  this.setState({users})


  }
  render() {
    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="login-wrap p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fas fa-user"></span>
                </div>
                <h3 className="text-center mb-4">Contact Manager</h3>
                <form className="login-form" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded-left"
                      placeholder="Add New Contact"
                      name="AddContact"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary rounded submit p-3 px-5"
                    >
                      Add Contact
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <ul className="list-unstyled">
          {this.state.users && this.state.users.lenght ? this.state.users : []}

          {this.state.users.map((user) => (
            <li className="contact-item">
              <a href={user.href}>
              {user.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Contact;
