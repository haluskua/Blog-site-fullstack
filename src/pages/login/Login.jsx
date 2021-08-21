import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter email..."
        />
        <label>Password</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter password..."
        />
        <button className="loginButton">Login</button>
        <button className="loginRegisterButton">Register</button>
      </form>
    </div>
  );
}
