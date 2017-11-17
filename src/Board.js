import React from 'react';
import { connect } from "redux-zero/react";
import SingUp from './SingUp';
import {addBoard,isClick,addComment} from './action';



const InputText =()=>{
    const onSubmit = (e) => {
      e.preventDefault();
      addComment(this.nameInputRef.value, this.commentInputRef.value)
    }
    return(
      <div className="col-lg-2 col-md-2 col-xs-2 input-data">
        <form onSubmit={onSubmit}>
        <div className=" form-group text-left">
          <input  type="text" className="form-control" ref={(e) => this.nameInputRef = e}/>
          </div>
        <div className="form-group">
          <textarea className="form-control" ref={(e) => this.commentInputRef = e} />
        </div>
        <button type="submit" className="btn btn-comment text-color">add commet</button>
        </form>
      </div>
      )
}
 const SingleComment =({oneComment,index})=>{
   return(
    <li key={index}>
      <div>
        {oneComment.name}
      </div>
      <div>
        {oneComment.comment}
      </div>
    </li>
   )
 }
const Comments =({task}) =>{
  return(
    <div className="col-lg-12">
    {
      task.map((item,index)=>{
        return <SingleComment key={index} oneComment={item} index={index}/>
      })
    }
  </div>
  )
}

const Board =({task})=>{
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
        </div>
        <InputText/>
        <div className="showComments">
        <Comments task = {task}/>
        </div>
        </div>
      </div>
  )
}

const mapToProps = ({task}) => ({task});
export default connect(mapToProps)(Board)
