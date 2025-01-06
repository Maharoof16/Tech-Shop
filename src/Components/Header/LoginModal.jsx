import React, { useState } from 'react';
import axios from 'axios';

const LoginModal = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Login successful");
        setUser(response.data); 
        localStorage.setItem("user", JSON.stringify(response.data));

        setEmail("");
        setPassword("");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data || "Invalid credentials");
      } else {
        setError("Error logging in");
      }
    }
  };

  return (
    <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ zIndex: 1051 }}>
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: "#1b1b1b" }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel" style={{ color: "lightgray" }}>Login</h5>
            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleLogin}>
              <input 
                type="email" 
                className="form-control mt-3" 
                placeholder="Email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <input 
                type="password" 
                className="form-control mt-3" 
                placeholder="Password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn form-control mt-3" style={{ backgroundColor: "#ff2e2e", color: "white" }}>
                Login
              </button>
            </form>
            {error && <div className="text-danger mt-3">{error}</div>}
            <div className="d-flex justify-content-between mt-3">
              <button type="button" className="btn" style={{ backgroundColor: "#3b5998", color: "white", width: "32%" }}>
                Facebook
              </button>
              <button type="button" className="btn" style={{ backgroundColor: "#db4437", color: "white", width: "32%" }}>
                Google
              </button>
              <button type="button" className="btn" style={{ backgroundColor: "#00acee", color: "white", width: "32%" }}>
                Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
