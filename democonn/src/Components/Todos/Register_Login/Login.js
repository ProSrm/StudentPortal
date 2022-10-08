export default function Login() {
  return (
    <>
      <div className="form">
        <form action="/home" className="formdata">
          <label htmlFor="Username" />
          <input id="Username" placeholder="Please enter Username " />
          <label htmlFor="Username" />
          <input id="Password" placeholder="Please enter Password " />
          <div>This is button</div>
        </form>
      </div>
    </>
  );
}
