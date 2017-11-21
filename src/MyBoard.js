import React, { Component } from 'react';
import {connect} from 'redux-zero/react'
import {NavLink,  Redirect } from 'react-router-dom';
import {signIn, signOut, signUp, addNewBoard} from './action'
import Board from './Board';

const MyBoard =({successLogin, user, boards, stages, tasks})=>{
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="main-header">
          <div className="col-lg-2 col-md-2 col-xs-2 cont-icon">
              <span><i className="fa fa-columns fa-2x" aria-hidden="true"></i></span>
              <span className="board">Boards</span>
          </div>
          <div className="col-offset-2 col-lg-8 col-md-8 col-xs-8 text-center logo">
              <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d"/>
          </div>
          <div >
              <span><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i></span>
              <span className="board" onClick = {signOut} >SignOut</span>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-xs-2 cont-icon-user">
              <span><i className="fa fa-user fa-2x" aria-hidden="true"></i></span>
              <NavLink to="board"><span className="board">{user.fullname}</span></NavLink>
          </div> 
          <div>
          <form onSubmit = { e => {
             e.preventDefault();
             addNewBoard (this.boardInputRef.value, user.id)
          }}>
          <div className="inputBoard">
          <input  placeholder="Board Name" ref= {e => this.boardInputRef = e}/>
             <button className="btn btn-secondary"type="submit">
                 new Board
              </button>
          </div> 
           </form>
            </div>
      </div>
    </div>
  )
}

const mapToProps = ({successLogin, user, boards, stages, tasks})  => ({successLogin, user, boards, stages, tasks})
export default connect(mapToProps)(MyBoard)