import "./App.css";

function Login({ setIsLoggedIn }) {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;