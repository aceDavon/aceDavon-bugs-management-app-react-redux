import { useSelector } from "react-redux";
import { LogoIcon, BugsIcon } from "../Icons";

export default function Navbar() {
  const { qty } = useSelector((state) => state.bug);
  return (
    <>
      <div className="top-nav">
        <div className="nav-content">
          <LogoIcon />
          <div className="aligned">
            <BugsIcon />
            <p className="bug-qty">{qty}</p>
          </div>
        </div>
      </div>
    </>
  );
}
