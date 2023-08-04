import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = ({ jobs }) => {
  const cardStyle = {
    backgroundColor: '#e84393',
    color: '#fff',
    padding: '20px',
    marginBottom: '20px',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    borderRadius: '10px',
  };

  const buttonStyle = {
    width: '120px',
    backgroundColor: '#2ed573',
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '10px 20px',
    borderRadius: '5px',
    marginTop: '10px',
  };

  return (
    <div>
      {jobs &&
        jobs.map((item) => (
          <div key={item._id} style={cardStyle}>
            <h3>{item.jobtitle}</h3>
            <p>{item.comName}</p>
            <p>Work From: {item.WorkFrom}</p>
            <p>Location: {item.location}</p>

            <div className="row">
              <div className="col-1"></div>
              <div className="col-3">
                <p>Start Date</p>
                <p>24 Jan, 2023</p>
              </div>
              <div className="col-3">
                <p>Duration</p>
                <p>{item.jobduration}</p>
              </div>
              <div className="col-3">
                <p>Salary</p>
                <p>{item.salary}</p>
              </div>
            </div>
            <p>
              <b>Number of Applications: </b> {item.jobCount.length}
            </p>
            <button className="btn_detail" style={buttonStyle}>
              <Link to={`/job/${item._id}`} style={{ color: 'white', textDecoration: 'none' }}>
                Detail
              </Link>
            </button>
          </div>
        ))}
    </div>
  );
};

export default Jobs;
