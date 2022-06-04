import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "./userSlice";
import { selectAllBugs } from "../bugs/bugSlice";
import Auth from "./auth";
import Index from "./index";

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const { user, isloggedIn } = useSelector(selectAllUsers);
  const [userModal, setUserModal] = useState(false);
  const { bug } = useSelector(selectAllBugs);

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await fetch("https://fakestoreapi.com/users")).json();
      setUsers(data);
    };

    fetchData();
  }, []);

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
        {userModal && <Auth users={users} />}
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
          <Index data={[user, bug]} />
        </tbody>
      </table>
    </div>
  );
};

export default UserContainer;
