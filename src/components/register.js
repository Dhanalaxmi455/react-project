import React from "react";
import "../styles/register.scss";
import { Link } from "react-router-dom";


export default function Register(){

    return(
        
<main>
        <section>
            <div className="login-container">
                <h2 className="h2">Register Form</h2>
        
                <form className="form">
                <div>
                    <label> Name : </label>
                    <input className="input" placeholder="enter your name"/></div>

                   <div><label > Email Address:</label>
                    <input className="input" placeholder="you@example.com"/></div>

                 <div>
                    <label>Password:</label>
                    <input className="input"  placeholder="Enter 6 character or more"/></div>

                    <div><label > Phone no:</label>
                    <input className="input" placeholder="enter your number"/></div>
                    <button className="btn">REGISTER NOW</button>
                  <p className="already">Already have an account?<Link to="/login"><p>Login</p></Link></p>

                
                </form>
          </div>
            <div>
                <img className="img" src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg"/>
            </div>
        </section>
        </main>
        
    )
}

