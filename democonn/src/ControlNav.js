// import { useContext } from "react";
// import Parent from "./Components";
import Navbar from "./Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Groups from "./Packages/Group";
import Discuss from "./Packages/Discuss";
import Meeting from "./Packages/Meeting";
import ToDo from "./Components/Todos/ToDo";
import Login from "./Components/Todos/Register_Login/Login";

function ControlNav() {
  return (
    <>
      <Navbar />
      <div className="container ">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/groups" element={<Groups />}></Route>
          <Route path="/meeting" element={<Meeting />}></Route>
          <Route path="/discuss" element={<Discuss />}></Route>
          <Route path="/todo" element={<ToDo />} />
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default ControlNav;
