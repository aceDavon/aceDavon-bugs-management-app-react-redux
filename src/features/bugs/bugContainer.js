import { useSelector } from "react-redux";
import { BugItem } from "./bugItem";

export const BugContainer = () => {
  const { qty, bug } = useSelector((state) => state.bug);

  return qty < 1 ? (
    <div className="mainCont">
      <h1 className="mainCont-header">Empty</h1>
      <span className="alert-text">
        No bugs here for now, please report an issue to add a bug for review!
      </span>
    </div>
  ) : (
    <div className="bug-cont">
      <h1>Bugs</h1>
      <table className="bug-contInner">
        <tbody className="bugTable-body">
          {bug.map((bugs) => {
            return <BugItem key={bugs.id} {...bugs} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
