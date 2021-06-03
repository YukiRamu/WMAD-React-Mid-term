import React, { useState, useEffect } from "react";
import "./Account.css";
import { Form, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <>
      <div className="newAccountContainer">
        <Form className="accountForm">
          <h2>Create Account</h2>
          <Form.Group controlId="formGroupName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Row className="btnRow">
            <Button variant="primary" type="submit" className="col createBtn">Create</Button>
            {/* Route to home page */}
            <Link
              to={"/home"}
              className="col goToHomeBtn">Return to store</Link>
          </Row>
        </Form>

      </div>
    </>
  );
};

export default Account;
