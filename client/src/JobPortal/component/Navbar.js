import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();

  const id = JSON.parse(localStorage.getItem("currentUser"))?. _id;
  const name = JSON.parse(localStorage.getItem("currentUser"))?.name;
  const typeUser = JSON.parse(localStorage.getItem("currentUser"))?.applitype;

  
  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  };

  const brandStyle = {
    fontWeight: 'bold',
    fontSize: '28px',
    color: '#e84393', // Pink color
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Text shadow effect
    textDecoration: 'none', // Remove underline on hover
  };

  const dropdownItemStyle = {
    color: '#393',
    textDecoration: 'none',
    padding: '8px 16px', // Add some padding for each dropdown item
    display: 'block', // Display dropdown items as block elements
    borderRadius: '4px', // Add rounded corners for dropdown items
    transition: 'background-color 0.3s ease', // Add transition effect on background-color change
  };

  const dropdownItemHoverStyle = {
    backgroundColor: '#f3f3f3', // Add background color on hover
  };

  const loginLinkStyle = {
    color: '#333',
    textDecoration: 'none',
  };

  const pinkButtonStyle = {
    backgroundColor: '#e84393',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    margin: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg  mb-5 navbar-white bg-white rounded " style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={brandStyle}>JOB HUNGER</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto">

            <div className="dropdown mt-2">
              <a className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {name && name}
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to={`/profile/${id}`}>Profile</Link>
                {typeUser !== "recuiter" ? <>
                  <a className="dropdown-item" href="/myapplication">My Application</a>
                </> : null}

                {typeUser === "recuiter" ? <>
                  <a className="dropdown-item" href="/createJobApp">createJobApp</a>
                  <a className="dropdown-item" href="/jobView">JobView</a>
                </> : null}

                <a className="dropdown-item" href="#" onClick={() => dispatch(logoutUser())}><li>Logout</li></a>

              </div>
            </div>

            {id === null ? <>
              <li className="nav-item ">
                <a className="nav-link " aria-current="page" href="/login" style={loginLinkStyle}>Login</a>
              </li>
            </> : null}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default (Navbar);
