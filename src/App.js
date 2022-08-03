import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import SignIn from "./Components/SignIn/SignIn";
import SignOut from "./Components/SignOut";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignInRoute from "./Components/ProtectedRoutes/SignInRoute";
import CartRoute from "./Components/ProtectedRoutes/SignInRoute";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<CartRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signOut" element={<SignOut />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
