import React, { Component } from "react";
import { Col, Row } from "reactstrap";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      age: "",
      country: "",
      city: "",
      status: "",
    };
  }

  onChangeForm(name, e) {
    if (name === "firstName") {
      this.setState({
        firstName: e.target.value,
      });
    } else if (name === "lastName") {
      this.setState({
        lastName: e.target.value,
      });
    } else if (name === "email") {
      this.setState({
        email: e.target.value,
      });
    } else if (name === "mobile") {
      this.setState({
        mobile: e.target.value,
      });
    } else if (name === "age") {
      this.setState({
        age: e.target.value,
      });
    } else if (name === "country") {
      this.setState({
        country: e.target.value,
      });
    } else if (name === "city") {
      this.setState({
        city: e.target.value,
      });
    } else if (name === "status") {
      this.setState({
        status: e.target.value,
      });
    }
  }

  handleSave() {
    let user = [
      {
        fullName: this.state.firstName + " " + this.state.lastName,
        lastName: this.state.lastName,
        email: this.state.email,
        mobile: this.state.mobile,
        age: this.state.age,
        country: this.state.country,
        city: this.state.city,
        status: this.state.status,
      },
    ];
    localStorage.setItem("userList", JSON.stringify(user));
  }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Enter User Information Here:
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <Row
                style={{
                  padding: "15px",
                }}
              >
                <Col>
                  <p>First Name:</p>
                  <p>Last Name:</p>
                  <p>Email:</p>
                  <p>Mobile:</p>
                  <p>Age:</p>
                  <p>Country:</p>
                  <p>City:</p>
                  <p>Account Type:</p>
                </Col>
                <Col>
                  <form>
                    <input
                      type="text"
                      style={{
                        marginBottom: "9px",
                      }}
                      onChange={(e) => {
                        this.onChangeForm("firstName", e);
                      }}
                    ></input>
                    <input
                      type="text"
                      style={{
                        marginBottom: "9px",
                      }}
                      onChange={(e) => {
                        this.onChangeForm("lastName", e);
                      }}
                    ></input>
                    <input
                      type="email"
                      style={{
                        marginBottom: "9px",
                      }}
                      onChange={(e) => {
                        this.onChangeForm("email", e);
                      }}
                    ></input>
                    <input
                      type="number"
                      style={{
                        marginBottom: "9px",
                      }}
                      onChange={(e) => {
                        this.onChangeForm("mobile", e);
                      }}
                    ></input>
                    <input
                      type="number"
                      style={{
                        marginBottom: "9px",
                      }}
                      onChange={(e) => {
                        this.onChangeForm("age", e);
                      }}
                    ></input>
                    <input
                      type="text"
                      style={{
                        marginBottom: "9px",
                      }}
                      onChange={(e) => {
                        this.onChangeForm("country", e);
                      }}
                    ></input>
                    <input
                      type="text"
                      style={{
                        marginBottom: "9px",
                      }}
                      onChange={(e) => {
                        this.onChangeForm("city", e);
                      }}
                    ></input>
                    <div>
                      <select
                        style={{
                          padding: "4px 0",
                          width: "11.6rem",
                        }}
                        placeholder="sss"
                        onChange={(e) => {
                          this.onChangeForm("status", e);
                        }}
                      >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </select>
                    </div>
                  </form>
                </Col>
              </Row>
              <div
                className="modal-footer"
                style={{
                  justifyContent: "center",
                }}
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={false}
                  style={{
                    width: "50%",
                  }}
                  onClick={() => {
                    this.handleSave();
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
