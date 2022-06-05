import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "./userSlice";
import { useNavigate } from "react-router-dom";

const Auth = ({ users, isloggedIn }) => {
  const dispatch = useDispatch();
  const [values, setvalues] = useState({});
  const navigate = useNavigate();

  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const { psw, username } = values;

  const handleClick = () => {
    const userArr = users.find(
      (x) => x.username === username && x.password === psw
    );

    const canDispatch = [userArr, isloggedIn].every(Boolean);

    canDispatch ? setErr(!err) : dispatch(signIn(userArr));
    return navigate("/issues/view", { replace: true });
  };

  return (
    <div className="modal">
      <div className="form-group">
        <form>
          <div className="formInput-group">
            <label>Username or Email</label>
            <input
              type="text"
              placeholder="please enter your username"
              name="username"
              onChange={(e) => handleChange(e)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="psw"
              onChange={(e) => handleChange(e)}
            />
            {!err && (
              <small className="plainWarning-txt">
                Add links to resources if necessary.
              </small>
            )}
            {err && (
              <small className="Warning-txt">
                Make sure to enter all fields correctly...
              </small>
            )}
          </div>
          <div className="action-btns">
            <button
              className="btn primary d-block"
              type="button"
              onClick={() => handleClick()}
            >
              Login
            </button>
            <button className="btn secondary">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
