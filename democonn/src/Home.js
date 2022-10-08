import "./css/home.css";
import "./css/testimonial.css";
import Reviews from "./Components/Todos/Testimonial/Reviews";
import { ReactComponent as Confernce } from "./images/undraw_conference_re_2yld.svg";
import { ReactComponent as Discussion } from "./images/undraw_public_discussion_re_w9up.svg";
import { ReactComponent as Connect } from "./images/undraw_connecting_teams_re_hno7.svg";
import { useEffect, useLocation } from "react";
import { Navbar } from "react-bootstrap";
import Footer from "./Footer";

export default function Home() {
  // useEffect(() => {
  //   <Navbar />;
  // }, []);
  // const { state } = useLocation();
  return (
    <div className="homemain">
      {/* <Navbar /> */}

      <div className="container">
        <aside>
          <Confernce height="400" width="400" />
        </aside>
        <article>
          <h2 style={{ textAlign: "center" }}>Welcome to Student Portal </h2>
          <p style={{ textAlign: "center" }}>
            <h5>
              A place where we connect with community and work together towards
              the same goal
            </h5>
          </p>
        </article>
        <aside></aside>
      </div>
      <div className="container2">
        <section>
          <div className="scd1">
            <h4>
              <p>
                A place where you can connect with people and share Ideas with
                ease Manage tasks with the help of Todo List Find good books
                with one click{" "}
                <span style={{ fontWeight: "bold" }}>Absolutely free</span>
                ignissimos vel illumores enim temporibus, dicta sit neque
                nesciunt minus. Sunt nobis numquam cum libero ut facere deserunt
                possimus totam aspernatur fuga? Nostrum aperiam repellendus illo
                libero neque accusamus dolor, ea deserunt. Totam soluta, labore
                a nemo vel enim in cupiditate hic dolorem expedita amet quam
                officia voluptatum pariatur suscipit? Hic, quod. In soluta
                impedit ducimus veritatis nobis iste et cum odio minima sapiente
                cupiditate quasi eum ullam cumque amet, necessitatibus vel
                itaque ipsum corrupti id repellat deserunt repudiandae. Ea,
                assumenda dolores.
              </p>
            </h4>
          </div>
        </section>
        <article>
          <Discussion height="400" width="400" />
        </article>
      </div>

      <main>
        <section className="containertestimonial">
          <div className="title">
            <h2>Testimonial</h2>
            <div className="underline"></div>
            <Reviews />
          </div>
        </section>
      </main>

      <footer className="footerContainer">
        <Footer />
      </footer>
    </div>
  );
}
