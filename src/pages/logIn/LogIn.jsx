import "./LogIn.css";
import logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Input from "../../components/input/Input";

import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div className="container login-container">
      <form onSubmit={handleLogin}>
        <img src={logo} alt="Logo" />
        <h2>Welcome back!</h2>
        <p className="muted">
          Have a nice time and <b>Enjoy</b>!
        </p>
        <Input
          id="username"
          name="username"
          autocomplete="username"
          value={username}
          placeholder="Username"
          onChange={handleChangeUsername}
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChangePassword}
        />
        {error && (
          <small>{error /*Username or Password is not correct!*/}</small>
        )}
        <button className="submit btn-prim" type="submit">
          LogIn
        </button>
        <p className="muted">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LogIn;
