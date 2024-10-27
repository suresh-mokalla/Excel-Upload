import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import DataTable from './DataTable';
import './ExcelUpload.css';

const ExcelUpload = () => {
  const [excelData, setExcelData] = useState([]);
  const [file, setFile] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.xls,.xlsx',
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  // Read Excel file
  const readExcel = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  

  return (
    <div className="container">
      <div className="upload-box" {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag your file(s) to start uploading</p>
        <div className="divider">
        <span>OR</span>
      </div>
        <button className="btn btn-secondary">Browse Files</button>
        
      </div>
      <div className="file-support-info">
      <p>Only Supports  <strong>.xlsx, .xls</strong> files</p>
    </div>
    {file && (
          <div className="file-info">
            <p>{file.name}</p>
            <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
          </div>
        )}
      
      <div className="button-card">
      <div className="button-container">
        <button className="btn btn-success" disabled={!file} onClick={() => readExcel(file)}>
          Upload
        </button>
        <button className="btn btn-secondary" onClick={() => setFile(null)}>
          Cancel
        </button>
      </div>
    </div>


      {excelData.length > 0 && (
        <div className="table-container mt-4">
          <DataTable data={excelData} />
        </div>
      )}
    </div>
  );
};

export default ExcelUpload;
