// import React from "react";

import { useState, useEffect, useRef } from "react";
import { FaSignInAlt, FaEye, FaEyeSlash } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { login, reset } from "../features/auth/authSlice";

import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [visible, setVisible] = useState(false);

  const btnPassword = useRef(null);

  const { email, password } = formData;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      navigate("/");
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isLoading, isSuccess, isError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangePassword = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    if (btnPassword.current && e.target.value !== "") {
      btnPassword.current.classList.add("show");
    } else {
      btnPassword.current.classList.remove("show");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = { email, password };

    dispatch(login(userData));
    // dispatch(reset());
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Welcome, please login in</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type={visible ? "text" : "password"}
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              autoComplete="new-password"
              onChange={onChangePassword}
            />
            <div
              className="btn-password"
              ref={btnPassword}
              onClick={() => setVisible(!visible)}
            >
              {visible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Log In
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
