import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

const ReadOnlyRow = ({ employees, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{employees.Name}</td>
      <td>{employees.Job}</td>
      <td>

        {/* <Button
          type="button" variant="primary"
          onClick={(event) => handleEditClick(event, employees)}
        >
          Edit
        </Button> */}
        <Button type="button"  variant="primary" onClick={() => handleDeleteClick(employees.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;