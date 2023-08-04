import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobAppliByuserId, getAllJobAction } from "../actions/job_actions";
import { Link } from "react-router-dom";

const UserApplication = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;
    dispatch(getAllJobAppliByuserId(id));
    dispatch(getAllJobAction("All"));
  }, []);

  const { myJob } = useSelector(state => state.geJobAppliByuserIdReducer);
  const { jobs } = useSelector(state => state.getAllJobReducer);
  var arr = [];
  const modifyFyb = () => {
    var ddarr = myJob && jobs && myJob.forEach(element => {
      jobs.forEach(item => {
        if (element.jobId === item._id) {
          element.jobtitle = item.jobtitle;
          element.comName = item.comName;
          arr.push(element);
        }
      });
    });
  };
  modifyFyb();

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: '#FFC0CB',
    color: '#fff',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };

  const evenRowStyle = {
    backgroundColor: '#f2f2f2',
  };

  const btnStyle = {
    backgroundColor: '#e84393',
    border: 'none',
    color: 'white',
    padding: '8px 16px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '14px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const h4Style = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  return (
    <div className='col-md-10 m-auto'>
      <h4 style={h4Style}>My All Application</h4>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Serial No.</th>
            <th style={thStyle}>Company</th>
            <th style={thStyle}>Profile</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Application Status</th>
            <th style={thStyle}>Application Review</th>
          </tr>
        </thead>
        <tbody>
          {arr && arr.map((book, index) => (
            <tr key={book._id} style={index % 2 === 0 ? evenRowStyle : {}}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{book.comName}</td>
              <td style={tdStyle}>{book.jobtitle}</td>
              <td style={tdStyle}>{book.createdAt.substring(0, 10)}</td>
              <td style={tdStyle}>{book.status}</td>
              <td style={tdStyle}>
                <button style={btnStyle}>
                  <Link to={`/myapplication/${book._id}/job/${book.jobId}`} style={{ textDecoration: "none", color: "white" }}>Detail</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserApplication;
