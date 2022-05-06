import React from "react";
import { Col, Row } from "reactstrap";

function UserForm() {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Enter User Information Here:
              </h5>
              <button
                type="button"
                class="close"
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
                    //   onChange={this.changeFu}
                    //   value={this.state.content}
                  ></input>
                  <input
                    type="email"
                    style={{
                      marginBottom: "9px",
                    }}
                    //   onChange={this.changeFu}
                    //   value={this.state.content}
                  ></input>
                  <input
                    type="email"
                    style={{
                      marginBottom: "9px",
                    }}
                    //   onChange={this.changeFu}
                    //   value={this.state.content}
                  ></input>
                  <input
                    type="email"
                    style={{
                      marginBottom: "9px",
                    }}
                    //   onChange={this.changeFu}
                    //   value={this.state.content}
                  ></input>
                  <input
                    type="email"
                    style={{
                      marginBottom: "9px",
                    }}
                    //   onChange={this.changeFu}
                    //   value={this.state.content}
                  ></input>
                  <input
                    type="email"
                    style={{
                      marginBottom: "9px",
                    }}
                    //   onChange={this.changeFu}
                    //   value={this.state.content}
                  ></input>
                  <input
                    type="email"
                    style={{
                      marginBottom: "9px",
                    }}
                    //   onChange={this.changeFu}
                    //   value={this.state.content}
                  ></input>
                  <div>
                    <select
                      style={{
                        padding: "4px 0",
                        width: "11.6rem",
                      }}
                      placeholder="sss"
                      //   value="null"
                    >
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                </form>
              </Col>
            </Row>
            <div
              class="modal-footer"
              style={{
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                class="btn btn-primary"
                disabled={false}
                style={{
                  width: "50%",
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

export default UserForm;
