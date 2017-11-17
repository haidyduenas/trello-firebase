import React from 'react';
import { connect } from "redux-zero/react";
import './App.css';


const App =()=> {
  
    return (
      <div className="container-fluid">
    </div>
    );
  }

  const mapToProps = ({input}) => ({input});
  
  export default connect(mapToProps)(App);
