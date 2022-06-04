import { useSelector } from "react-redux";
import { selectAllBugs } from "../features/bugs/bugSlice";
import { selectAllUsers } from "../features/users/userSlice";
import { LogoIcon, BugsIcon } from "../Icons";

export default function Navbar() {
  const { qty } = useSelector(selectAllBugs);
  const { user } = useSelector(selectAllUsers);

  const acct = user.map((details) => details.username);
  return (
    <>
      <div className="top-nav">
        <div className="nav-content">
          <LogoIcon />
          <div className="top-group">
            <span>
              {acct ? (
                <p className="plainWarning-txt">{acct}</p>
              ) : (
                <p className="plainWarning-txt">login</p>
              )}
            </span>
            <div className="aligned">
              <BugsIcon />
              <p className="bug-qty">{qty}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
