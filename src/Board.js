import React from 'react';
import { connect } from "redux-zero/react";
import SingUp from './SingUp';
import{Redirect} from 'react-router-dom'
import {addStage,signIn, signOut, signUp} from './action'
import Stage from './Stage';




const FirstBoard =({successLogin,task,stages})=>{
  const list = stages.map ( stage => {
    return <Stage  key={stage} title={stage} 
       task = {  task.filter ( e => e.stage === stage )}
    />
 });
  return(
    <div className="container-fluid text-center">

        <div className="row">
        <div className="col-lg-12 col-md-12 main-header">
          <div className="col-lg-2 col-md-2 cont-icon">
              <span><i className="fa fa-columns fa-2x" aria-hidden="true"></i></span>
              <span className="board">Boards</span>
          </div>
          <div className="col-offset-2 col-lg-8 col-md-8 text-center logo">
              <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d"/>
          </div>
 
         <div >
              <span><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i></span>
              <span className="board" onClick = {signOut} >SignOut</span>
          </div>
        </div>
        <div className="showComments">
        <div className = "Board-container">
        
          <div className = "Board-column">
             {list}
          </div>
          <div className = "Board-column">
            <form onSubmit = { (e) => {
               e.preventDefault();
               addStage (this.stageInputRef.value);
            }}>
               <input type="text" ref = {e => this.stageInputRef = e}/>
               <button type="submit">
                  save list
               </button>
               </form>
            </div>
      </div>
        </div>
        </div>
      </div>
  )
}
const Board = ({successLogin,stages, task}) => {
  console.log (stages);
  console.log (task);
  
  return <div className="App">
               {
            !successLogin  && <Redirect to = "/singin" />
         }
      <FirstBoard successLogin={successLogin} stages={stages}  task = {task}/>
  </div>
};

const mapToProps = ({successLogin,task,stages}) => ({successLogin,task,stages});
export default connect(mapToProps)(Board)
