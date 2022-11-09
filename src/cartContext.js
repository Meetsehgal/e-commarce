import { createContext, useState } from "react";

export const store = createContext();

const Provider = ({ children }) => {
  const [cartCount, setCartCount] = useState(1);
  const [count, setCount] = useState("");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [add, setAdd] = useState([]);
  const [data, setData] = useState();
  const [act,setAct]=useState("home");
  const [increment, setIncrement] = useState();
  const [decrement, setDecrement] = useState();
  const [active, setActive] = useState();
  const [api, setApi] = useState([]);
  const [localStorageProduct, setlocalStorageProduct] = useState(
   )
   const [modal, setModal] = useState(false);
  return (
    <store.Provider
      value={{
        cartCount,
        setCartCount,
        count,
        setCount,
        show,
        setShow,
        show1,
        setShow1,
        add,
        setAdd,
        data,
        setData,
        act,
        setAct,
        increment,
        setIncrement,
        decrement,
        setDecrement,
        active,
        setActive,
        api,
        setApi,
        localStorageProduct, 
        setlocalStorageProduct,
        modal,
        setModal,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Provider;
