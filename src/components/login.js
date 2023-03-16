import React from "react";
import "../styles/login.scss";
import {FcGoogle} from "react-icons/fc";
import {FaFacebookF} from "react-icons/fa";
import Register from "./register";
import { Link } from "react-router-dom";


export default function Login(){

    return(
        
<main>
        <section>
            <div className="login-container">
                <h2 className="h2">Login</h2>
                <p>Doesn't have an account yet ?<Link to="/"><p className="span">Sign Up</p></Link> </p>

                <form className="form">
                   <div><h5 > Email Address</h5>
                    <input className="input" placeholder="you@example.com"/></div>
                  <div><span className="pass">
                  <h5 className="h5">  Password</h5>
                  <p className="span">Forget Password ?</p>
                  </span>
                    <input className="input"  placeholder="Enter 6 character or more"/></div>
                   <div> <input type={"checkbox"} />  Remember more</div>

                    <button className="btn" onClick={()=>Register()}>LOGIN</button>

                    <div>
                        <button className="google-btn"><FcGoogle/>Google</button>
                        <button className="fb-btn"><FaFacebookF/>Facebook</button>
                    </div>
                </form>
            </div>
            <div>
                <img className="img" src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg"/>
            </div>
        </section>
        </main>
        
    )
}

