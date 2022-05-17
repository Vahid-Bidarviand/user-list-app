import React, { Component } from "react";
import { Col, Row } from "reactstrap";

class UserList extends Component {
  state = {
    items: [
      {
        id: 1,
        fullName: "Study SSS",
        email: "test@gmail.com",
        status: "admin",
        time: "April 10, 2022",
      },
    ],
  };
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div className="content-box">
              <Row className="table-header">
                <Col xs="10">
                  <span>
                    This is the list of all your users including their full
                    name, email, status of their account and their time of
                    registrey.
                  </span>
                </Col>
                <Col xs="2">
                  <button
                    type="button"
                    class="btn btn-primary add-user-button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Add User
                  </button>
                </Col>
              </Row>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    <th scope="col">Time of Registery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{this.state.items.fullName}</td>
                    <td>Otto@gmail.com</td>
                    <td>Admin</td>
                    <td>April 12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
