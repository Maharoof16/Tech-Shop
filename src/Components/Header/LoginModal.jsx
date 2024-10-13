import React from 'react';

const LoginModal = () => {
  return (
    <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ zIndex: 1051 }}>
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: "#1b1b1b" }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel" style={{ color: "lightgray" }}>Login</h5>
            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <input type="email" className="form-control mt-3" placeholder="Email" name="email" style={{ backgroundColor: "#2c2c2c" }} />
              <input type="password" className="form-control mt-3" placeholder="Password" name="password" style={{ backgroundColor: "#2c2c2c" }} />
              <button className="btn form-control mt-3" style={{ backgroundColor: "#ff2e2e", color: "white" }}>
                Login
              </button>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
