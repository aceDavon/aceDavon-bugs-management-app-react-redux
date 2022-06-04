import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TimeAgo from "../../components/timeAgo";
import { Beaker } from "../../Icons";
import { selectAllUsers } from "../users/userSlice";
import { removeBug, resolveBug } from "./bugSlice";

export const BugItem = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAllUsers);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const name = user.map((x) => x.username);
    setUsername(name);
  }, [user]);

  console.log(username);
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
            <button
              className="action secondary"
              onClick={() => {
                dispatch(removeBug(props.id));
              }}
            >
              Remove
            </button>
            <button
              className="action primary"
              onClick={() => handleClick(props.id)}
            >
              Resolve
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
