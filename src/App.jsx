import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import topShoes from "./data/topshoes";
import ButtonTest from "./components/ButtonTest";
import UseStateDemo from "./hooks/UseStateDemo";
import Counter from "./hooks/Counter";

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
      <UseStateDemo />
      {/*<Counter />*/}
    </>
  );
};

export default App;
