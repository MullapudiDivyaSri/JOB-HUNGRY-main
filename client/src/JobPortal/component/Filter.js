import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllJobAction } from '../actions/job_actions';

const Filter = () => {
  const checkValue = [5000, 10000, 15000, 25000, 50000];
  const [searchKey, setSearchKey] = useState('');
  const dispatch = useDispatch();

  const cardStyle = {
    backgroundColor: '#e84393',
    color: '#fff',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px',
  };

  const formCheckStyle = {
    marginTop: '7px',
  };

  const inputStyle = {
    marginTop: '10px',
    width: '100%',
    borderRadius: '5px',
  };

  const buttonStyle = {
    marginTop: '10px',
    backgroundColor: '#2ed573',
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      dispatch(getAllJobAction('Salary', e.target.value));
    }
  };

  const handleSearch = () => {
    dispatch(getAllJobAction('Location', searchKey));
  };

  return (
    <div>
      <div style={cardStyle}>
        <p className="text-start text-bold">Filter By Salary</p>
        {checkValue.map((item, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              value={item}
              id={item.value}
              onChange={(e) => handleChange(e)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault" style={formCheckStyle}>
              ₹{item}
            </label>
          </div>
        ))}
      </div>

      <div style={{ ...cardStyle, padding: '1px' }}>
        <p className="text-start text-bold">Filter By Location</p>
        <input
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          type="text"
          placeholder="location"
          className="form-control"
          style={inputStyle}
        />

        <button type="button" className="ser_btn" style={buttonStyle} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
