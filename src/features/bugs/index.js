import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Flash from "../../components/flash";
// import { useGetUserByIdQuery } from "../../services/userAPI";
import { selectAllUsers } from "../users/userSlice";
import { addBug } from "./bugSlice";

export const BugsIndex = () => {
  const dispatch = useDispatch();
  // const { data, error, isLoading } = useGetUserByIdQuery;
  const [values, setvalues] = useState({
    title: "",
    description: "",
  });
  const [err, setErr] = useState(false);
  const { isloggedIn, authUser } = useSelector(selectAllUsers);
  const [flash, setFlash] = useState(false);
  const [link, setLink] = useState(false);

  const userId = authUser.id;

  let { title, description } = values;
  const canSave = Boolean(title) && Boolean(description);

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    !isloggedIn ? setErr(!err) : setErr(err);

    if (!err && isloggedIn) {
      dispatch(addBug(title, description, userId));
      setvalues("");
      setFlash(!flash);
      setTimeout(() => {
        setFlash(!flash);
        setLink(!link);
      }, 1200);
      return;
    }
  };
  return (
    <div className="form-group">
      <form>
        <div className="formInput-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Best name for the issue"
            name="title"
            aria-label="Issue Name"
            onChange={(e) => handleChange(e)}
          />
          <label>Description</label>
          <input
            type="text"
            placeholder="Describe the issue"
            name="description"
            aria-label="Issue Description"
            onChange={(e) => handleChange(e)}
          />
          {!err && (
            <>
              <small className="plainWarning-txt">
                Add links to resources if necessary.
              </small>
              <Link to={"../view"} className="issue-link">
                see all issues
              </Link>
            </>
          )}
          {err && (
            <small className="Warning-txt">
              You have to be logged in to add an issue{" "}
              <a href="/" className="hyper-links">
                Login
              </a>
            </small>
          )}
        </div>
        <div className="form-btn">
          <button
            className="btn primary"
            onClick={handleSubmit}
            disabled={!canSave}
            type="button"
          >
            Submit Issue
          </button>
          <button className="btn secondary">Reset Fields</button>
        </div>
      </form>
      {flash && <Flash {...values} />}
      {link && <Navigate replace to={"../view"} />}
    </div>
  );
};
