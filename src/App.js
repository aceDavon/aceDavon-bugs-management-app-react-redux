import "./App.css";
import Navbar from "./components/Navbar";
import { BugContainer } from "./features/bugs/bugContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bugsQty } from "./features/bugs/bugSlice";
import { BugsIndex } from "./features/bugs";

function App() {
  const dispatch = useDispatch();
  const { bug } = useSelector((state) => state.bug);

  useEffect(() => {
    dispatch(bugsQty());
  }, [bug]);

  return (
    <div className="App">
      <Navbar />
      <BugContainer />
      <BugsIndex />
    </div>
  );
}

export default App;
