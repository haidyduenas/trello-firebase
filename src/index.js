import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "redux-zero/react";
import store from './store'
import {HashRouter,Switch,Route} from 'react-router-dom';
import Board from './Board';
import SingIn from './SingIn';
import SingUp from './SingUp';
import MyBoard from './MyBoard'
import {readBoard} from './action'

const Index =()=>(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route  exact path="/" component ={SingIn}/>
                <Route  path="/singin" component ={SingIn}/>
                <Route  path="/singup" component ={SingUp}/>
                <Route  path="/myboard" component ={MyBoard}/>
                <Route  path="/board" component ={Board}/>
                
            </Switch>
        </HashRouter>
    </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();