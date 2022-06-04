import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { BugContainer } from "./features/bugs/bugContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bugsQty } from "./features/bugs/bugSlice";
import { BugsIndex } from "./features/bugs";
import UserContainer from "./features/users/userContainer";
import Auth from "./features/users/auth";
// import { selectAllUsers } from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();
  const { bug } = useSelector((state) => state.bug);
  // const { isloggedIn } = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(bugsQty());
  }, [bug]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            element={
              // !isloggedIn ? (
              //   <Navigate replace to={"/view"} />
              // ) : (
              <UserContainer />
              // )
            }
            path={"/"}
            exact
          />
          <Route element={<Auth />} path={"/login"} />
          <Route path={"/issues"}>
            <Route element={<BugContainer />} path={"view"} />
            <Route element={<BugsIndex />} path={"add-issues"} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
