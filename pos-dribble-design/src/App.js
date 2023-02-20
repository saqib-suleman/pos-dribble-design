import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import classes from "./App.module.css";
import CartProvider from "./store/CartProvider";
import Modal from "./components/UI/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <CartProvider>
      <div className={classes.App}>
        <Sidebar setShowModal={setShowModal} />
        <Main />
      </div>
      {showModal && (
        <Modal text={"Payment successful"} setShowModal={setShowModal} />
      )}
    </CartProvider>
  );
}

export default App;
