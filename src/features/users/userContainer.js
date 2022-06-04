import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "./userSlice";
import { selectAllBugs } from "../bugs/bugSlice";
import Auth from "./auth";
import Index from "./index";

const UserContainer = () => {
  const { users, isloggedIn } = useSelector(selectAllUsers);
  const [userModal, setUserModal] = useState(false);
  const { bug } = useSelector(selectAllBugs);

  return !isloggedIn ? (
    <div className="mainCont">
      <h1 className="mainCont-header">Dashboard</h1>
      <span className="alert-text">
        Please login to track issues you added to the system and request review.
        <button
          className="btn primary d-block"
          onClick={() => setUserModal(!userModal)}
          disabled={isloggedIn}
          type="button"
        >
          Login
        </button>
        {userModal && <Auth verified={isloggedIn} users={users} />}
      </span>
    </div>
  ) : (
    <div className="mainCont">
      <h1 className="mainCont-header">Dashboard</h1>
      <span className="alert-text dropped">
        Below are the list of issues you have added so far and their status
      </span>

      <table className="bug-contInner">
        <tbody className="bugTable-body">
          <Index />
        </tbody>
      </table>
    </div>
  );
};

export default UserContainer;
