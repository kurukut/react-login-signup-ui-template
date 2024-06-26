import React from "react";
function Signup(){
    return(
       <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
                <label>First Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                />
            </div>
            <div className="mb-3">
                <label>Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                />
            </div>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Signup
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
       </form>
    )
}

export default Signup;