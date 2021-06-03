//This component is for the login page of our website
import React, { useState } from "react";
import "./LogIn.css";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const LogIn = () => {

  //authorised admin user
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123"
  };

  //state hook
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [details, setDetails] = useState({ name: "", email: "", password: "" }); //user input

  //methods
  const logIn = (detailsInput) => {
    console.log(detailsInput);

    if (detailsInput.email === adminUser.email && detailsInput.password === adminUser.password) {
      setUser({
        name: detailsInput.name,
        email: detailsInput.email
      });
    } else {
      setError("User detail is not correct");
    };
  };

  const logOut = () => {
    console.log("log out");
    setUser({
      name: "",
      email: ""
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    logIn(details);
  };

  return (
    <>
      <div className="loginContainer">
        {(user.email !== "") ? (
          //when the login is successfull
          <>
            <h2 className="welcome">Welcome, <span>{user.name} </span>! Have a good shopping.</h2>
            <div className="row btnDiv">
              <Button type="button" onClick={logOut} className="col logOutBtn">Log Out</Button>
              {/* Route to home page */}
              <Link
                to={{
                  pathname: "/home",
                  state: {
                    userName: user.name
                  }
                }}
                className="col goToHomeBtn">
                Go to store
              </Link>
            </div>

          </>) : (
          // Show Form
          <Form onSubmit={submitHandler} className="logInForm">
            <h2>Login</h2>
            {(error !== "") ? (
              //when there is an error logging in 
              <>
                <p className="errorMsg">{error}</p>
              </>
            ) : ""}
            <Form.Group controlId="formGroupName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name"
                onChange={e => { setDetails({ ...details, name: e.target.value }); setError(""); }}
                value={details.name} />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={e => { setDetails({ ...details, email: e.target.value }); setError(""); }}
                value={details.email} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => { setDetails({ ...details, password: e.target.value }); setError(""); }}
                value={details.password} />
            </Form.Group>
            <Button variant="primary" type="submit" className="submitBtn">Log in</Button>
            <Link
              to="/account"
              className="newAccount">
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> Haven't had an account? Create one!</Link>
          </Form>
        )}

      </div>
    </>
  );
};

export default LogIn;
