import React, { useState } from 'react';
//import { FaTrashAlt, FaDownload } from 'react-icons/fa';

const DataTable = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  // Handle row selection
  const handleSelectRow = (index) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };


  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Select</th>
            {Object.keys(data[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(rowIndex)}
                  onChange={() => handleSelectRow(rowIndex)}
                />
              </td>
              {Object.values(row).map((val, colIndex) => (
                <td key={colIndex}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default DataTable;
