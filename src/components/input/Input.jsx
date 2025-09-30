import "./Input.css";

import Svg from "../svg/Eye";

import { useState } from "react";

const Input = ({
  type = "text",
  name,
  value,
  placeholder,
  required = true,
  onChange,
  onBlur,
  onFocus,
}) => {
  const [togglePass, setTogglePass] = useState(false);

  const togglePassword = () => {
    setTogglePass(!togglePass);
  };

  return (
    <div className="input-container">
      {type === "password" ? (
        <>
          <div
            className={`eye ${togglePass ? "eye-open" : "eye-close"}`}
            onClick={togglePassword}
          >
            <Svg />
          </div>
          <input
            type={togglePass ? "text" : "password"}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            required={required}
            className="input"
          />
        </>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          required={required}
          className="input"
        />
      )}
    </div>
  );
};

export default Input;
