import "./SignUp.css";
import Input from "../../components/input/Input";

import logo from "../../assets/images/logo.png";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { signup, clearError } from "../../store/authSlice";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
  });

  const { name, email, username, password, confirmPassword, birthDate } = user;

  const [error, setError] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const { user: loggedInUser, error: signupError } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e, key) => {
    setUser({ ...user, [key]: e.target.value });
  };

  const validateField = (key, value) => {
    let message = "";

    switch (key) {
      case "name":
        if (!value.trim()) message = "Name is required";
        break;
      case "email":
        if (!value.trim()) {
          message = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          message = "Email is invalid";
        }
        break;
      case "username":
        if (!value.trim()) {
          message = "Username is required";
        } else if (!/^[a-z][a-z0-9]*$/.test(value)) {
          message =
            "Username must start with a letter and contain only lowercase letters and numbers, no spaces";
        }
        break;
      case "password":
        if (!value) {
          message = "Password is required";
        } else if (value.length < 8) {
          message = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(value)) {
          message = "Password must contain at least one uppercase letter";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
          message = "Password must contain at least one special character";
        }
        break;
      case "confirmPassword":
        if (value !== user.password) {
          message = "Passwords do not match";
        }
        break;
      case "birthDate":
        if (!value) {
          message = "Birth date is required";
        } else {
          const birthYear = new Date(value).getFullYear();
          if (birthYear > 2000) {
            message = "You must be born in 2000 or earlier";
          }
        }
        break;
      default:
        break;
    }

    setError((prev) => ({ ...prev, [key]: message }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const keys = Object.keys(user);
    keys.forEach((key) => validateField(key, user[key]));

    if (isFormValid()) {
      dispatch(signup({ name, email, username, password, birthDate }));
    }
  };

  const handleFocus = (key) => {
    setError((prev) => ({ ...prev, [key]: "" }));
  };

  const isFormValid = () => {
    // All fields must be filled
    const allFieldsFilled = Object.values(user).every(
      (val) => val.trim() !== ""
    );

    // No error messages
    const noErrors = Object.values(error).every((err) => err === "");

    return allFieldsFilled && noErrors;
  };

  useEffect(() => {
    if (loggedInUser) {
      navigate("/home"); // redirect to home if signup is successful
    }
  }, [loggedInUser, navigate]);

  return (
    <div className="container signup-container">
      {/*<pre>
        {JSON.stringify(user, null, 2)}
      </pre>*/}
      <form>
        <img src={logo} alt="Logo" />
        <h2>Welcome to Movie Magic!</h2>
        <p className="muted">
          Have a nice time and <b>Enjoy</b>!
        </p>
        <Input
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => {
            handleChange(e, "name");
          }}
          onBlur={(e) => {
            validateField("name", e.target.value);
          }}
          onFocus={() => handleFocus("name")}
        />
        {error.name && <small>{error.name}</small>}

        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            handleChange(e, "email");
          }}
          onBlur={(e) => {
            validateField("email", e.target.value);
          }}
          onFocus={() => handleFocus("email")}
        />
        {error.email && <small>{error.email}</small>}

        <Input
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => {
            handleChange(e, "username");
          }}
          onBlur={(e) => {
            validateField("username", e.target.value);
          }}
          onFocus={() => handleFocus("username")}
        />
        {error.username && <small>{error.username}</small>}

        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            handleChange(e, "password");
          }}
          onBlur={(e) => {
            validateField("password", e.target.value);
          }}
          onFocus={() => handleFocus("password")}
        />
        {error.password && <small>{error.password}</small>}

        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(e) => {
            handleChange(e, "confirmPassword");
          }}
          onBlur={(e) => {
            validateField("confirmPassword", e.target.value);
          }}
          onFocus={() => handleFocus("confirmPassword")}
        />
        {error.confirmPassword && <small>{error.confirmPassword}</small>}

        <Input
          type="date"
          name="birthDate"
          value={birthDate}
          placeholder="Birth date"
          onChange={(e) => {
            handleChange(e, "birthDate");
          }}
          onBlur={(e) => {
            validateField("birthDate", e.target.value);
          }}
          onFocus={() => handleFocus("birthDate")}
        />
        {error.birthDate && <small>{error.birthDate}</small>}
        <br />
        {signupError && <small>{signupError}</small>}
        <button
          className="submit btn-prim"
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid()}
        >
          SignUp
        </button>
        <p className="muted">
          Don't have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
