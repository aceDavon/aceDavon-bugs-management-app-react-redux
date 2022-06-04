import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "./userSlice";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
  const dispatch = useDispatch();
  const [values, setvalues] = useState({});
  const navigate = useNavigate();

  const [err, setErr] = useState(false);

  const user = props.users;

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const { psw, username } = values;

  const handleClick = () => {
    const found = user.find(
      (x) => x.username === username && x.password === psw
    );

    console.log(found);

    if (found) {
      dispatch(signIn(found));
      return navigate("/issues/view", { replace: true });
    } else {
      setErr(false);
    }
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
          <div className="form-btn">
            <button
              className="btn primary d-block"
              type="button"
              onClick={() => handleClick()}
            >
              Login
            </button>
            <button className="btn secondary">Reset Fields</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
