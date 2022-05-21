import React, { Component } from "react";
import { Col, Row } from "reactstrap";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    let getUserList = JSON.parse(localStorage.getItem("userList"));
    this.setState({
      items: getUserList,
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="content-box">
              <Row className="table-header">
                <Col xs="10">
                  {console.log("ss", this.state.items)}
                  <span>
                    This is the list of all your users including their full
                    name, email, status of their account and their time of
                    registrey.
                  </span>
                </Col>
                <Col xs="2">
                  <button
                    type="button"
                    className="btn btn-primary add-user-button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Add User
                  </button>
                </Col>
              </Row>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Age</th>
                    <th scope="col">Country</th>
                    <th scope="col">City</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.items &&
                    this.state.items.length > 0 &&
                    this.state.items.map((user, index) => {
                      // console.log("ss", user);
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{user.fullName}</td>
                          <td>{user.email}</td>
                          <td>{user.mobile}</td>
                          <td>{user.age}</td>
                          <td>{user.country}</td>
                          <td>{user.city}</td>
                          <td>{user.status}</td>
                        </tr>
                      );
                    })}
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
