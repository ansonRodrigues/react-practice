import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import topShoes from "./data/topshoes";
import ButtonTest from "./components/ButtonTest";
import UseStateDemo from "./hooks/UseStateDemo";
import Counter from "./hooks/Counter";
import Form from "./components/Form";
import Notes from "./components/Notes";
import UseEffectDemo from "./hooks/UseEffectDemo";
import { Link, Routes, Route } from "react-router-dom";
import About from "./pages/About";

const App = () => {
  return (
    <>
      {/*<Navbar userName="Anson" age2={23} />*/}
      {/*<div className="product-card-container">
        {topShoes.map((elem) => {
          return (
            <Card
              productImage={elem.productImage}
              brandLogo={elem.brandLogo}
              prodTitle={elem.title}
              prodDesc={elem.description}
              price={"$ " + elem.price}
            />
          );
        })}
      </div>*/}
      {/*<ButtonTest />*/}
      {/*<UseStateDemo />*/}
      {/*<Counter />*/}
      {/*<Form />*/}
      {/*<Notes />*/}
      {/*<UseEffectDemo />*/}
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
