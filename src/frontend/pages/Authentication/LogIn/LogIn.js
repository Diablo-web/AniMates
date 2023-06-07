import "../styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/auth-context";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

function LogIn() {
  const { loginHandler } = useAuth();

  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
    hidePassword: true,
  });

  document.title = "Login";

  const guestUserDetails = {
    email: "sumedhk12@gmail.com",
    password: "password",
  };

  const loginFormInputHandler = (e) => {
    const { name, value } = e.target;
    setUserLoginDetails({ ...userLoginDetails, [name]: value });
  };

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(userLoginDetails);
  };

  return (
    <div className="page-wrapper">
      <section className="form login">
        <div className="form-content">
          <h1>Welcome Back!</h1>
          <div className="form-header">
            <h2>Please Log In to continue</h2>
          </div>
          <form onSubmit={loginFormSubmitHandler}>
            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={userLoginDetails.email}
                className="input"
                onChange={loginFormInputHandler}
                required
              />
            </div>
            <div className="field input-field">
              <input
                type={userLoginDetails.hidePassword ? "password" : "text"}
                placeholder="Password"
                name="password"
                value={userLoginDetails.password}
                className="password"
                onChange={loginFormInputHandler}
                required
              />
              {userLoginDetails.hidePassword ? (
                <VisibilityOffOutlinedIcon
                  className="eye-icon"
                  onClick={() =>
                    setUserLoginDetails({
                      ...userLoginDetails,
                      hidePassword: !userLoginDetails.hidePassword,
                    })
                  }
                />
              ) : (
                <VisibilityOutlinedIcon
                  className="eye-icon"
                  onClick={() =>
                    setUserLoginDetails({
                      ...userLoginDetails,
                      hidePassword: !userLoginDetails.hidePassword,
                    })
                  }
                />
              )}
            </div>
            <div className="field input-field">
              <button className="login-btn" type="submit">
                Log In
              </button>
            </div>
            <div className="field input-field">
              <button
                className="guest-login-btn"
                type="submit"
                onClick={() =>
                  setUserLoginDetails({
                    email: guestUserDetails.email,
                    password: guestUserDetails.password,
                  })
                }
              >
                Log In as a Guest
              </button>
            </div>
            <div className="form-link">
              <Link to="/signup">
                <span className="link">SignUp</span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export { LogIn };
