import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

//importing all basic routes
import Home from "./Home";
import Groups from "./Packages/Group";
import Meeting from "./Packages/Meeting";
import Discuss from "./Packages/Discuss";
import Main from "./Packages/Main";
import ToDo from "./Components/Todos/ToDo";
import Navbar from "./Navbar";
import { AddContent } from "./Packages/AddContent";
import { Resource } from "./Packages/Resource";
import { AddPost } from "./Packages/AddPost";
import { Post } from "./Packages/Post";

function App() {
  // const navigate = useNavigate();
  // function login_here() {
  //   navigate("/");
  // }
  // function register_here() {
  //   navigate("/register");
  // }
  return (
    <>
      {/* <button onClick={login_here}>Login</button>
      <button onClick={register_here}>Register</button> */}
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/nav" element={<Navbar />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
        <Route path="/meeting" element={<Meeting />}></Route>
        <Route path="/discuss" element={<Discuss />}></Route>
        <Route path="/todo" element={<ToDo />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/books" element={<Main />}></Route>
        <Route path="/youtubeManage" element={<AddContent />}></Route>
        <Route path="/youtubeLearning" element={<Resource />}></Route>{" "}
        <Route path="/addPosts" element={<AddPost />}></Route>
        <Route path="/seePosts" element={<Post />}></Route>
        <Route path="/app" element={<App />}></Route>
      </Routes> */}
    </>
  );
}
export default App;
