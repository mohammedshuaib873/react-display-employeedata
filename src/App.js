import React, { useState, Fragment } from "react";
import './App.css';
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const App = () => {
  const [employees, setEmployees] = useState(data);

  const [addFormData, setAddFormData] = useState({
    Name: "",
    Job: "",
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Job: "",
  });

  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newEmployee = {
      id: nanoid(),
      Name: addFormData.Name,
      Job: addFormData.Job
    };

    const newEmployees = [...employees, newEmployee];
    setEmployees(newEmployees);
  };

    const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedEmployee = {
    id: editEmployeeId,
    Name: editFormData.Name,
    Job: editFormData.Job,
  };

  const newEmployee = [...employees];

  const index = employees.findIndex((employee) => employees.id === editEmployeeId);

  newEmployee[index] = editedEmployee;

  setEmployees(newEmployee);
  setEditEmployeeId(null);
};

const handleEditClick = (event, employees) => {
  event.preventDefault();
  setEditEmployeeId(employees.id);

  const formValues = {
    Name: employees.Name,
    Job: employees.Job
  };

  setEditFormData(formValues);
};

const handleCancelClick = () => {
  setEditEmployeeId(null);
};

const handleDeleteClick = (employeeId) => {
  const newEmployees = [...employees];

  const index = employees.findIndex((employee) => employee.id === employeeId);

  newEmployees.splice(index, 1);

  setEmployees(newEmployees);
};
  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
             {employees.map((employees) => (
                    <Fragment>
                          {editEmployeeId === employees.id ? (
                    <EditableRow
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                    />
                    ) : (
                    <ReadOnlyRow
                          employees={employees}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                    />
                    )}
                    </Fragment>
             ))}
          </tbody>
        </table>
      </form>
      <div style={{ display: 'block', 
                      width: 700, 
                      padding: 30 }}>
          <h4>Add New Employee</h4>
        <form onSubmit={handleAddFormSubmit}>
        <Form.Label>Name</Form.Label>
        <Form.Group>
          <Form.Control
          type="text"
          name="Name"
          required="required"
          placeholder="Enter Your Name..."
          onChange={handleAddFormChange}
        />
        </Form.Group>
        <Form.Label>Job</Form.Label>
        <Form.Group>
          <Form.Control
          type="text"
          name="Job"
          required="required"
          placeholder="Enter Your Designation..."
          onChange={handleAddFormChange}
        />
        </Form.Group><br></br>
        <Button variant="primary" type="submit">Submit</Button>
      </form>
      </div>
    </div>
  );
};

export default App;