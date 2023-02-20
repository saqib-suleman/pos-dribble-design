import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import classes from "./App.module.css";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <div className={classes.App}>
        <Sidebar />
        <Main />
      </div>
    </CartProvider>
  );
}

export default App;
