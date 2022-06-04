import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TimeAgo from "../../components/timeAgo";
import { Beaker } from "../../Icons";
import { selectAllBugs } from "../bugs/bugSlice";
import { selectAllUsers } from "./userSlice";

const Index = () => {
  const { authUser } = useSelector(selectAllUsers);
  const { bug } = useSelector(selectAllBugs);

  const [issues, setIssues] = useState([]);
  const userId = authUser.id;

  const FilterIssues = (arr1) => {
    const issues = arr1.map((x) => x.userId);
    return issues;
  };

  useEffect(() => {
    setIssues(FilterIssues(bug));
  }, [bug]);

  const userissues = issues.map((x) => (x === userId ? bug : null));

  return (
    <div>
      <table className="bug-contInner dropped">
        <tbody className="bugTable-body">
          {userissues.map((x) =>
            x.map((y) => (
              <tr>
                <td>
                  <Beaker />
                </td>

                <td className="bugs-col">
                  <div className="action-group">
                    {y.title}
                    <span className="plainWarning-txt">
                      You submitted this Issue <TimeAgo timestamp={y.date} />
                    </span>
                  </div>
                </td>
                {y.resolved ? (
                  <td className="bugs-col">
                    <p className="green-cont">resolved</p>
                  </td>
                ) : (
                  <td className="bugs-col">
                    <p className="red-cont">unresolved</p>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
