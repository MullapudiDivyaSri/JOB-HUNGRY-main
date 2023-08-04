import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfileAction, userEducations, userProjects, userSkills } from "../actions/userActions";
import Education from "../component/Education";
import Skillscompoent from "../component/Skills";
import Project from "../component/Project";
import Portfolio from "../component/Portfolio";

const Profile = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = match.params.id;
    if (id) {
      dispatch(userProfileAction(id));
      dispatch(userEducations(id));
      dispatch(userProjects(id));
      dispatch(userSkills(id));
    }
  }, []);

  const { cUser } = useSelector(state => state.userProfileReducer);
  const { userPort } = useSelector(state => state.userPortffolioReducer);

  const cardStyle = {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    background: '#fff',
    color: '#333',
  };

  const rowStyle = {
    marginBottom: '20px',
  };

  const colHeaderStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#e84393',
  };

  const nameStyle = {
    color: '#e84393',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const emailStyle = {
    color: '#333',
    fontSize: '16px',
    marginBottom: '5px',
  };

  return (
    <div className="col-md-10 m-auto">
      <div className="card p-4" style={cardStyle}>
        <div className="row" style={rowStyle}>
          <div className="col-md-4">
            {cUser && cUser[0] && (
              <>
                <h2 style={nameStyle}>{cUser[0].name.toUpperCase()}</h2>
                <p style={emailStyle}>{cUser[0].email}</p>
                <p style={emailStyle}>+91 {userPort && userPort[0] && userPort[0].mobile_no}</p>
                <p style={emailStyle}>{userPort && userPort[0] && userPort[0].location}</p>
              </>
            )}
          </div>
          <div className="col-md-6"></div>
        </div>
        <hr />

        <div className="row" style={rowStyle}>
          <div className="col-md-2" style={colHeaderStyle}>
            <h4>Education Details</h4>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <Education />
          </div>
        </div>

        <hr />

        <div className="row" style={rowStyle}>
          <div className="col-md-2" style={colHeaderStyle}>
            <h4>Skills Details</h4>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <Skillscompoent />
          </div>
        </div>

        <hr />

        <div className="row" style={rowStyle}>
          <div className="col-md-2" style={colHeaderStyle}>
            <h4>PERSONAL PROJECTS</h4>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <Project />
          </div>
        </div>

        <hr />

        <div className="row" style={rowStyle}>
          <div className="col-md-2" style={colHeaderStyle}>
            <h4>PORTFOLIO</h4>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <Portfolio />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
