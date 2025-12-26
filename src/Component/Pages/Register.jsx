import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {
  const { createUser, signinwithgoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");

  // ------------------------------
  // Normal Registration
  // ------------------------------
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    setError("");

    // ------------------------------
    // PASSWORD VALIDATION
    // ------------------------------
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one Uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one Lowercase letter");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    createUser(email, password)
  .then((result) => {
    const user = result.user;
    // update profile
    return updateProfile(user, { displayName: name, photoURL: photo }).then(() => user);
  })
  .then((user) => {
    // save to DB
    return fetch("https://plateshare-server-zeta.vercel.app/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, image: photo }),
    });
  })
  .then((res) => res.json())
  .then(() => {
    // show toast AFTER everything is done
    toast.success("Registration Successful!");
    navigate(redirectPath);
  })
  .catch((err) => {
    console.log(err)
    toast.error(err.message)
  });
  };

  // ------------------------------
  // Google Login
  // ------------------------------
  const handleGoogle = () => {
    signinwithgoogle()
      .then((result) => {
        const newuser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newuser),
        })
          .then((res) => res.json())
          .then(() => {
            toast.success("Google Login Successful!");
            navigate(redirectPath);
          });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-8 shadow-xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold mb-3">Register Now</h1>

        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input name="name" type="text" className="input" required />

            <label className="label">Email</label>
            <input name="email" type="email" className="input" required />

            <label className="label">Photo URL</label>
            <input name="photo" type="text" className="input" />

            <label className="label">Password</label>
            <input name="password" type="password" className="input" required />
          </fieldset>

          {error && <p className="text-red-600 mt-2">{error}</p>}

          <button className="btn btn-neutral w-full mt-4">Register</button>
        </form>

        <button
          onClick={handleGoogle}
          className="btn bg-white text-black border mt-4"
        >
          Login with Google
        </button>

        <p className="mt-3 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
