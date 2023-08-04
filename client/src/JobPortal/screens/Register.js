import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../actions/userActions";
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [itemSelect, setItemSelect] = useState("");
  const [loading, setLoading] = useState(true);

  const registerState = useSelector(state => state.userReducer);
  const { error, success } = registerState;

  const dispatch = useDispatch();

  const cardStyle = {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    background: '#fff',
    color: '#333',
    width: '100%', 
    transition: 'transform 0.3s ease-in-out',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '24px',
  };

  const inputStyle = {
    marginBottom: '10px',
  };

  const selectStyle = {
    marginBottom: '10px',
    width: '100%',
    height: '40px',
  };

  const linkStyle = {
    textAlign: 'center',
    fontSize: '20px',
    textDecoration: 'none',
  };

  const buttonStyle = {
    width: '100px',
    height: '50px',
  };

  useEffect(() => {
    setLoading(!(name && email && password && cpassword && itemSelect));
  }, [name, email, password, cpassword, itemSelect]);

  const register = () => {
    if (password !== cpassword) {
      alert("Password does not match");
    } else {
      const user = { name, email, password, applitype: itemSelect };
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 mt-5 shadow p-3 mb-5 bg-white rounded">
          <div className='card p-5' style={cardStyle}>
            <h2 style={titleStyle}>Register As a {itemSelect === "" ? "candidate" : itemSelect}</h2>
            <div>
              <input required type="text" placeholder="name"
                className="form-control job_form" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
              <input required type="text" placeholder="email"
                className="form-control job_form" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
              <input required type="password" placeholder="password"
                className="form-control job_form" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
              <input required type="password" placeholder="confirm password" className="form-control job_form" value={cpassword}
                onChange={(e) => setcPassword(e.target.value)} style={inputStyle} />
              <br />
              <select value={itemSelect} onChange={e => setItemSelect(e.target.value)} style={selectStyle}>
                <option value="recuiter">Recuiter</option>
                <option value="candidate">Candidate</option>
              </select>
              <br />
              <button onClick={register} className="btn btn-primary mt-3" style={buttonStyle} disabled={loading}>Register</button>
              <br />
              <p style={linkStyle}><Link to="/login">Go to login page</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
