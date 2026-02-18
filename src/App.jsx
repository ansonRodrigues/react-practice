import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
//import topShoes from "./data/topshoes";
import ButtonTest from "./components/ButtonTest";
import UseStateDemo from "./hooks/UseStateDemo";
import Counter from "./hooks/Counter";
import Form from "./components/Form";
import Notes from "./components/Notes";
import UseEffectDemo from "./hooks/UseEffectDemo";
import { Link, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ThemeContext from "./context/ThemeContext";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import CounterRedux from "./redux/CounterRedux";
import FrontUi from "./pages/project/FrontUi";
import CustomerTable from "./pages/customers/CustomerTable";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeContext>
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
          {/*<div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>*/}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/counter" element={<CounterRedux />} />
            <Route path="/project" element={<FrontUi />} />
            <Route path="/customer" element={<CustomerTable />} />
          </Routes>
        </ThemeContext>
      </Provider>
    </>
  );
};

export default App;
