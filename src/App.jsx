import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import NoMatchPage from "./NoMatchPage";
import Dashboard from "./Dashboard";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { UserContext } from "./UserContext";
import Store from "./Store";
import ProductsLists from "./ProductsLists";

function App() {
  let [user, setUser] = useState({
    isLoggedIn: false,
    currentUserId: null,
    currentUserName: null,
    currentUserRole: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <HashRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact="true" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/store" element={<Store />} />
            <Route path="/products" element={<ProductsLists />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
