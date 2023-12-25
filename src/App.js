import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Filter from "./Pages/Filter";
import "./global.css";
import Products from "./Pages/Products";
import Settings from "./Pages/Settings";
import CreateProduct from "./Pages/CreateProduct";
import Product from "./Pages/Product";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    );
};

export default App;
