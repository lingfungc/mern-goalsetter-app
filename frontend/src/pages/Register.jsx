// import React from "react";

import { useState, useEffect, useRef } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

// * This "useSelector" is to select something from the state in redux.js
// * This "useDispatch" is to dispatch an async thunk function (e.g. reset, register) in the "reducer"
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

// We also need to import "ToastContainer" and the CSS in App.js
import { toast } from "react-toastify";

import { register, reset } from "../features/auth/authSlice";

import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const btnPassword = useRef(null);
  const btnPassword2 = useRef(null);

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isLoading, isSuccess, isError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      // This "e.target.name" is actually the form field name
      [e.target.name]: e.target.value,
    }));
  };

  const onChangePassword = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      // This "e.target.name" is actually the form field name
      [e.target.name]: e.target.value,
    }));

    if (btnPassword.current && e.target.value !== "") {
      btnPassword.current.classList.add("show");
    } else {
      btnPassword.current.classList.remove("show");
    }
  };

  const onChangePasswordTwo = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      // This "e.target.name" is actually the form field name
      [e.target.name]: e.target.value,
    }));

    if (btnPassword2.current && e.target.value !== "") {
      btnPassword2.current.classList.add("show");
    } else {
      btnPassword2.current.classList.remove("show");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = { name, email, password };

      // We pass the "userData" to the register() as "user" argument in the createAsyncThunk() in authSlice.js
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  // const data = "This is data";

  return (
    <>
      {/* <div>Register</div> */}
      {/* <p>{data}</p> */}

      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
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
            <input
              type={visible2 ? "text" : "password"}
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              autoComplete="new-password"
              onChange={onChangePasswordTwo}
            />
            <div
              className="btn-password"
              ref={btnPassword2}
              onClick={() => setVisible2(!visible2)}
            >
              {visible2 ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
