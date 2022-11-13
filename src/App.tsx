import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowModal } from "./components/ShowModal";
import { ShowProducts } from "./components/ShowProducts";
import { Payment } from "./components/Payment";
import { IMovies } from "./models/IMovies";
import { SetStateAction } from "react";
import { ICart } from "./models/ICart";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowProducts />}></Route>
          <Route
            path="/payment"
            element={<Payment cart={[]} showPayment={false} />}
          ></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
