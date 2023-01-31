import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
