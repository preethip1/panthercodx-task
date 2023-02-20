import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import {userListState} from "./atoms"
import {useRecoilValue} from "recoil";
import {useSetRecoilState} from "recoil";

function TableData() {
  const setUserList = useSetRecoilState(userListState);
  const userList = useRecoilValue(userListState);
  useEffect(() => {
    let listOfUser = localStorage.getItem("users") || '[]';
    setUserList(listOfUser);
  }, []);

  return (
    
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Salary Expectation</th>
          <th>Skills</th>
          <th>Work mode</th>
        </tr>
      </thead>
      <tbody>
      {JSON.parse(userList).map((user) => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.DOB}</td>
            <td>{user.salary}</td>
            <td>{Object.keys((user.skills || {})).map((skill)=>{return user.skills[skill] ? skill + " " : ""})}</td>
            <td>{user.mode}</td>
          </tr>
        );
      })}
      </tbody>
    </Table>
  );
}

export default TableData;
