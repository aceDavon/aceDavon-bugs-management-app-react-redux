import { useDispatch } from "react-redux";
import { Beaker } from "../../Icons";
import { removeBug, resolveBug } from "./bugSlice";

export const BugItem = (props) => {
  const dispatch = useDispatch();

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
