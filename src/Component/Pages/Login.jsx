import React, { useContext, useState } from "react";

import { Link, useNavigate, useLocation } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
  const { signinUser, signinwithgoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    signinUser(email, password)
      .then(() => {
        toast.success("Login Successful!");
        navigate(redirectPath);
      })
      .catch(() => {
        setError("Invalid email or password");
        toast.error("Login Failed!");
      });
  };

  const handleGoogle = () => {
    signinwithgoogle()
      .then(() => {
        toast.success("Google Login Successful!");
        navigate(redirectPath);
      })
      .catch(() => toast.error("Google Login Failed!"));
  };

  return (<>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-4 mx-auto">
      <div className="card-body">

        <h1 className="text-3xl mb-3 text-center font-bold">Login</h1>

        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">

            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required/>

            {error && <p className="text-red-600">{error}</p>}

            <button className="btn bg-green-600 buttonin mt-4">Login</button>
          </fieldset>
        </form>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="btn bg-white text-black border mt-3"
        >
          Login with Google
        </button>

        <p className="text-sm mt-3">
          New here?{" "}
          <Link className="link link-primary" to="/register">
            Register Now
          </Link>
        </p>

      </div>
    </div>
 


</>

  );
};

export default Login;
