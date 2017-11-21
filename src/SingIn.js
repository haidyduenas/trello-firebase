import React from 'react';
import { connect } from "redux-zero/react";
import {Redirect, NavLink} from 'react-router-dom';
import {signIn, signOut, signUp} from './action'

const SingIn =({successLogin})=>{
    return(
        <div className="container-fluid text-center">
            <div className="row">
            {
                successLogin  && <Redirect to ='/myboard' />
            }
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className=" col-md-offset-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 img-logo">
                    <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d"/>
                </div>
                    <div className=" col-md-offset-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <form onSubmit = {
                            e => {
                                     e.preventDefault();
                                     signIn ( this.emailInputRef.value,  this.passwordInputRef.value)
                                    }
                            }>
                            <div className="form-group">
                            <input type="email" className="form-control input-sing" placeholder="Email" ref = { e => this.emailInputRef = e} />
                            </div>
                            <div className="form-group">
                            <input type="password" className="form-control input-sing" name="password" placeholder="password" ref = { e => this.passwordInputRef = e} />
                            </div>
                            <button type="submit" className="btn input-sing btn-sing">Sing In</button>
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
const mapToProps = ({successLogin})  => ({successLogin}) 
export default connect(mapToProps)(SingIn) ;
