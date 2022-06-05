import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Flash from "../../components/flash";
import TimeAgo from "../../components/timeAgo";
import { Beaker } from "../../Icons";
import { selectAllUsers } from "../users/userSlice";
import { removeBug, resolveBug } from "./bugSlice";

export const BugItem = (props) => {
  const dispatch = useDispatch();
  const { authUser } = useSelector(selectAllUsers);
  const [username, setUsername] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const name = authUser.username;
    let id = authUser.id;

    if (id === 1) {
      setAdmin(!admin);
    } else {
      setAdmin(false);
    }
    setUsername(name);
  }, []);

  const handleClick = (id) => dispatch(resolveBug(id));
  return (
    <tr>
      <td>
        <Beaker />
      </td>

      <td className="bugs-col">
        <div className="action-group">
          {props.title}
          <div className="action-btns">
            {!admin ? (
              <Link className="issue-link" to={"/review"}>
                Request review
              </Link>
            ) : (
              <button
                className="action primary"
                onClick={() => handleClick(props.id)}
              >
                Resolve
              </button>
            )}
            <button
              className="action secondary"
              onClick={() => {
                dispatch(removeBug(props.id));
              }}
            >
              Remove
            </button>
          </div>
          <span className="plainWarning-txt">
            Issue submitted by <Link to={"/"}>{username}</Link>{" "}
            <TimeAgo timestamp={props.date} />
          </span>
        </div>
      </td>
      {props.resolved ? (
        <td className="bugs-col">
          <p className="green-cont">resolved</p>
        </td>
      ) : (
        <td className="bugs-col">
          <p className="red-cont">unresolved</p>
        </td>
      )}
    </tr>
  );
};
