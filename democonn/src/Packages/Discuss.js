import { ReactComponent as Team } from "../images/undraw_engineering_team_a7n2.svg";
export default function Discuss() {
  function gotoChat() {}
  return (
    <>
      <section className="section-centertodo">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Team height="200" width="200" />
          <h2>
            <a href="http://localhost:8080/" target="_blank">
              Go to discussion section{" "}
            </a>
          </h2>
        </div>
      </section>
    </>
  );
}
