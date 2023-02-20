import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {userListState} from "./atoms";
import {useSetRecoilState} from "recoil";

function CreateModal() {
  const [show, setShow] = useState(false);

  const setUserList = useSetRecoilState(userListState);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    DOB: new Date(),
    salary: 0,
    skills: {
        javascript: false,
        html: false,
        css: false,
    },
    mode: "",
  });

  function saveUser() {
    setUserData(userData);
    let listOfUser = localStorage.getItem("users") || "[]";
    listOfUser = JSON.parse(listOfUser);
    listOfUser.push(userData);
    listOfUser = JSON.stringify(listOfUser)
    localStorage.setItem("users", listOfUser);
    setUserList(listOfUser);
    handleClose();
  }

  return (
    <div className="m-4">
      <Button variant="primary" onClick={handleShow}>
        Create New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                onChange={(e) => setUserData((old) => ({ ...old, name: e.target.value }))}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setUserData((old) => ({ ...old, email: e.target.value }))}
                required
              />
            </Form.Group>
            <Form.Control
              type="date"
              name="datepic"
              placeholder="DateRange"
              value={userData.date}
              onChange={(e) => setUserData((old) => ({ ...old, date: e.target.value }))}
              required
            />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary Expectation</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your salary expectation"
                required
                onChange={(e) => setUserData((old) => ({ ...old, salary: e.target.value }))}
              />
            </Form.Group>
            <div className="mb-3">
              <Form.Check label="Javascript" onChange={(e) => {setUserData((old) => ({...old, skills: {...old.skills, javascript:!old.skills.javascript }}))}}/>
              <Form.Check label="html" onChange={(e) => {setUserData((old) => ({...old, skills: {...old.skills, html:!old.skills.html }}))}}/>
              <Form.Check label="css" onChange={(e) => {setUserData((old) => ({...old, skills: {...old.skills, css:!old.skills.css }}))}}/>
            </div>
            <div className="mb-3">
              <Form.Check type="radio" label="WFO" onChange={(e) => {setUserData((old) => ({...old, mode:"WFO"}))}}/>
              <Form.Check type="radio" label="WFH" onChange={(e) => {setUserData((old) => ({...old, mode:"WFH"}))}}/>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateModal;
