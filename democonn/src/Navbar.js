import "./navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Children, useState } from "react";
import { useAuth } from "./Auth";
// import { Route, Routes } from "react-router-dom";
function App() {
  const [isadmin, setIsAdmin] = useState(false);
  // useEffect(() => {
  //   return () => {};
  // }, []);

  const auth = useAuth();
  return (
    <nav className="nav">
      <div className="logo">
        <h2>
          <a href="/">Student portal</a>
        </h2>
      </div>
      <ul className="Nav-list">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/discuss">Discuss</CustomLink>
        <CustomLink to="/todo">Todo</CustomLink>
        <CustomLink to="/books">Books</CustomLink>

        <CustomLink to="/seePosts">see Post</CustomLink>
        {/* if user is not logged in then show login page  */}
        {!auth.user && <CustomLink to="/login">Login</CustomLink>}

        {/* if user is logged in then show these pages  */}
        {auth.user && <CustomLink to="/addPosts">Posts</CustomLink>}
        {auth.user && <CustomLink to="/profile">Profile</CustomLink>}

        {/* {isadmin ? (
          <CustomLink to="/youtubeManage">Add Lcontent</CustomLink>
        ) : (
          <CustomLink to="/youtubeLearning">Resource</CustomLink>
        )} */}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default App;
