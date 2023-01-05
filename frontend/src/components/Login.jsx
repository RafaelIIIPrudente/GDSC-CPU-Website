import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <>
<section className="hero is-fullheight is-fullwidth">
     <div class="create-event-form">
    <div class="greetings create-event-form">
      <div class="navbar">
        <div class="container event-form"  style={{alignItems: 'center'}}>
          <form onSubmit={Auth}>
          {isError && <p className="has-text-centered">{message}</p>}
            <div class="form-group form-item title-admin-login" style={{alignItems: 'flex-end'}}>
              <h1 class="temp-title" style={{fontSize: 45, color: 'black', fontWeight: 500}}>Admin Login</h1>
            </div>
            <div class="form-group form-item">
              <label>Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" placeholder="Enter email" required/>
            </div>
            <div class="form-group form-item">
              <label>Password</label>
              <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" placeholder="Enter password" required/>
            </div>
            <button type="submit" class="btn btn-primary form-item" style={{marginTop: 20}}>{isLoading ? "Loading..." : "Login"}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    </section>
    </> 
  );
};

export default Login;
