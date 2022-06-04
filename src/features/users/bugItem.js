import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Beaker } from "../../Icons";
import { removeBug, resolveBug, selectAllBugs } from "./bugSlice";

export const BugItem = (props) => {
  const dispatch = useDispatch();
  const { bug } = useSelector(selectAllBugs);

  let storeUser = bug.map((x) => x.userId);
  let username = Object.values(storeUser)
    .map((x) => x.username)
    .reduce((_, x) => {
      return {
        [x]: storeUser[x],
      };
    });
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
            Issue submitted by <Link to={"/"}>{username}</Link>
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
