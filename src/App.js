// import logo from './logo.svg';
import "./App.css";
// import Header from "./header/header";
import Header from "./header/header";
import { Routes, Route } from "react-router-dom";
import Home from "./header/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login/login";
import Cart from "./cart/cart";
// import Pop from "./popup/Pop";
import { Button } from "react-bootstrap";
import "../src/popup/popup.css";
import Popup from "reactjs-popup";
import Provider from "./cartContext";
import Main from "./nav/nav";
import Cartbutton from "./cartbutton/cartbutton";
import ButttonInc from "./button-increment/Button_inc";
import Seeds from "./categories/seedsSubcat/seetSubcat";
import Combos from "./categories/comboSubcat/comboSubcat";
import Nuts from "./categories/nutsSubcat/nutsSubcat";
// import Slider from "./slider/slider";
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Header /> */}
      {/* <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup> */}
      <Provider>
        <Cartbutton />
        <Main />

        <Routes>
          <Route exact path="/" element={<Header />} />

          <Route exact path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/seeds" element={<Seeds />} />
          <Route path="/combos" element={<Combos />} />
          <Route path="/nuts" element={<Nuts />} />
        </Routes>
        {/* <Cart/> */}
        {/* <ButttonInc /> */}
      </Provider>
    </div>
  );
}

export default App;
