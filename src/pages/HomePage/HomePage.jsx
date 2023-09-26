import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function HomePage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const isUserSignedIn = props.user !== null;

    if (isUserSignedIn) {
      // If the user is signed in, redirect to the bio page
      navigate("/");
    }
  }, [props.user, navigate]);

  const handleSignIn = () => {
    // You can set a default username or customize this based on your needs
    const defaultUsername = "Guest"; // Change this to the desired default username
    props.setUser(defaultUsername);
    navigate("/bio");
  };

  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h3 className="login-title">Welcome to My Portfolio</h3>
        <button
          onClick={handleSignIn}
          className="login-button"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
