import React from 'react';
import { connect } from "redux-zero/react";
import SingUp from './SingUp';
import{Redirect} from 'react-router-dom'
import {addStage,signIn, signOut, signUp,addNewBoard} from './action'
import Stage from './Stage';


class Board extends React.Component {
  render () {
    const {title, boardId, stages, tasks} = this.props;
    
    let list = null;
    if (stages)
       list =  stages.map ( stage => {
       return <Stage  key={stage.id} title={stage.title} stageId = {stage.id}
          tasks = { tasks == null ? null : tasks.filter ( task => task.stageId === stage.id )}
       />
    });
  return(
        <div>
            <p>{title}</p>
          <div>
             {list}
             <form onSubmit = { (e) => {
                  e.preventDefault();
                  addStage (this.stageInputRef.value, boardId);
               }}>
                  <input type="text" ref = {e => this.stageInputRef = e}/>
                  <button type="submit">
                     save list
                  </button>
              </form>
          </div>
      </div>
    );
  }
}
const Boards = ({successLogin, user, boards, stages, tasks}) => {
  let list =  null;
  if (boards)
     list = boards.map ( board => {
        return (
        <div className="littleBoard">
        <Board key = {board.id} 
                       title = {board.title}
                       boardId = {board.id}
                       stages={stages == null ? null :  
                                   stages.filter (e => e.board_id == board.id )}  
                       tasks = {tasks}/>
                       </div>
        )
     })
  return <div className="container-fluid">
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
                <div>

           <ul>
              {list}
           </ul>

        {
           !successLogin  && <Redirect to = "/SingIn" />
        }
     </div> 
  </div>
  </div>
};

const mapToProps = ({successLogin, user, boards, stages, tasks})  => ({successLogin, user, boards, stages, tasks})
export default connect(mapToProps)(Boards)

