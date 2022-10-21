import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Product from "./Components/Product";
import { CartProvider } from "react-use-cart";

function App() {
  const [userData, setuserData] = useState("");
  // console.log("userData",userData)
  return (
    <div className="App">
      <CartProvider>
        <Header userData={userData} setuserData={setuserData} />
        <Product userData={userData} setuserData={setuserData} />
        <About />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
