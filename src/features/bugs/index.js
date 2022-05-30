import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBug } from "./bugSlice";

export const BugsIndex = () => {
  const dispatch = useDispatch();
  const [values, setvalues] = useState({
    title: "",
    description: "",
  });

  const [err, setErr] = useState(false);

  let { title, description } = values;

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    !title ? setErr(!err) : !description ? setErr(!err) : setErr(err);

    if (!err) {
      console.log("yay!");
      dispatch(addBug(values));
      setvalues("");
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
          <button className="btn primary" onClick={handleSubmit} type="button">
            Submit Issue
          </button>
          <button className="btn secondary">Reset Fields</button>
        </div>
      </form>
    </div>
  );
};
