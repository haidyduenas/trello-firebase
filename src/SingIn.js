import React from 'react';
import { connect } from "redux-zero/react";
import {NavLink} from 'react-router-dom';

const SingIn =()=>{
    return(
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className=" col-md-offset-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 img-logo">
                <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d"/>
                </div>
                    <div className=" col-md-offset-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control input-sing" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control input-sing" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <NavLink to="/myboard"><button type="submit" className="btn input-sing btn-sing">Sing In</button></NavLink>
                        </form>
                    </div>
                <div className=" col-md-offset-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 img-logo">
                <NavLink to="/singup"><p className="create">Create new account</p></NavLink>
                </div>
                </div>
            </div>        
        </div>
    )
}

export default SingIn;
