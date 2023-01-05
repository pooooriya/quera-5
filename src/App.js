import { useState } from "react";
import Home from './pages/index'
import Prodcut from "./pages/product";
import ProductDetail from './pages/product/{id}'
import PrivateRoute from "./routes/privateRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App(props) {
  // const [state, setState] = useState(1);
  // const [state, setState] = useState({
  //   username: "ali",
  //   password: "1234"
  // });
  const [state, setState] = useState([
    { id: 1, name: "pouriya" },
    { id: 2, name: "qoli" },
    { id: 3, name: "quera" },
  ]);
  //console.log(state);
  const handleIncrement = () => {
    ///array
    // ************   1  ************
    // 1. copy state ra begir
    // 2. taqirash bede
    // 3. setstate ra seda bzn
    // const copy = [...state];
    // const newState = copy.filter(x => x.name !== "qoli");
    // setState(newState);
    // ************  2  ************
    //setState([...state, { id: 5, name: "tests" }])


    ///object
    // ************   1  ************
    // 1. copy state ra begir
    // 2. taqirash bede
    // 3. setstate ra seda bzn
    // const copyState = { ...state }
    // copyState.username = "qoli"
    // copyState.age = 24
    // setState(copyState)

    // ************   2  ************
    // 1. state qabli ra spread kon dakhel yek object dgr (ham type byd bashn)
    // property ke mikhaham ra bad , tqirrr midaham
    //setState({ ...state, username: "pouriya",age:24 })


    ///premetive type
    //setState(state+1)

  }

  const handleDecrement = () => {
    setState(state)
    //setState((prev) => prev - 1)
  }

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/product" element={<Prodcut />} />
    //     <Route path="/product/:id" element={
    //       <PrivateRoute>
    //         <ProductDetail />
    //       </PrivateRoute>
    //     } />
    //     <Route path="/" element={<Home />} />
    //     <Route path="*" element={<div>404</div>} />
    //   </Routes>
    // </BrowserRouter>
    // <>
    //   {/* <div>{state.username}</div> */}
    //   {/* <Button title="+" onClick={handleIncrement} />
    //   <Button title="-" onClick={handleDecrement} /> */}
    <Home title="s" value="felan" />
    // </>
  );
}

export default App;
