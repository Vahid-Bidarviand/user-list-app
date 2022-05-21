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
  handleDelete(id) {
    let allUsers =
      this.state.items && this.state.items != "null" ? this.state.items : [];
    let newUserList = allUsers.filter((user) => {
      return user.id !== id;
    });
    localStorage.setItem("userList", JSON.stringify(newUserList));
    window.location.reload();
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
              {this.state.items && this.state.items.length > 0 ? (
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
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.items.map((user, index) => {
                      return (
                        <tr key={user.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{user.fullName}</td>
                          <td>{user.email}</td>
                          <td>{user.mobile}</td>
                          <td>{user.age}</td>
                          <td>{user.country}</td>
                          <td>{user.city}</td>
                          <td>{user.status}</td>
                          <td>
                            <i
                              className="fa fa-pencil"
                              style={{
                                cursor: "pointer",
                              }}
                            ></i>
                            <i
                              className="fa fa-trash"
                              onClick={() => {
                                this.handleDelete(user.id);
                              }}
                              style={{
                                marginLeft: "15px",
                                cursor: "pointer",
                              }}
                            ></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div
                  style={{
                    border: "2px solid white",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Currenty you don't have any users please add some :)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
