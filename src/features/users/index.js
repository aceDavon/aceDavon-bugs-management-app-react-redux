import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TimeAgo from "../../components/timeAgo";
import { Beaker } from "../../Icons";
import { selectAllBugs } from "../bugs/bugSlice";
import { selectAllUsers } from "./userSlice";

const Index = (props) => {
  const { user } = useSelector(selectAllUsers);
  const { bug } = useSelector(selectAllBugs);
  console.log(user);

  const [issues, setIssues] = useState([]);
  const userArr = user.map((x) => x.id);
  console.log(userArr);

  const FilterIssues = (arr1) => {
    const issues = arr1.map((x) => x.userId);
    return issues;
  };

  useEffect(() => {
    setIssues(FilterIssues(bug));
  }, [bug, user]);

  const userissues = issues.map((x) => (x.id === userArr[0] ? bug : null));
  console.log(userissues);

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
