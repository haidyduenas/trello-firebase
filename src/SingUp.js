import React from 'react';
import {NavLink,  Redirect } from 'react-router-dom';
import {connect} from 'redux-zero/react'
import {signIn, signOut, signUp} from './action'

const SingUp =({successLogin})=>{
    return(
        <div className="container-fluid text-center">
            {
               successLogin  && <Redirect to = "/myboard" />
            }
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className=" col-md-offset-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 img-logo">
                <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d"/>
                </div>
                    <div className=" col-md-offset-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                        <form onSubmit={
                                e => {
                                    e.preventDefault();
                                    signUp (this.fullNameRef.value, this.emailRef.value, this.passwordRef.value)
                                    }
                             }>
                            <div className="form-group">
                                <input type="text" className="form-control input-sing" placeholder = "FullName" ref = {e => this.fullNameRef = e}/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control input-sing" placeholder = "Email" ref = {e => this.emailRef = e}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control input-sing" placeholder = "Password" ref = {e => this.passwordRef = e}/>
                            </div>
                            <button type="submit" className="btn input-sing btn-sing">Sing Up</button>
                        </form>
                    </div>
                <div className=" col-md-offset-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <NavLink to="/singin" type="submit" className="btn input-sing btn-singIn">Sing In</NavLink>
                </div>
                </div>
            </div>        
        </div>
    )
}

const mapToProps = ({successLogin})  => ({successLogin}) 
export default connect(mapToProps)(SingUp) ;