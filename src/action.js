import store from './store';
import {auth, database, storage} from './firebase';

/*****************************************Board***************************************************/


    
    export function signUp (fullname, email, pass) 
    {
       console.log ('signUp' + fullname + email + pass);
    
       auth.createUserWithEmailAndPassword (email, pass).then ( user => {
          let newuser = {
             fullname, email
          }
          database.ref ('users/' + user.uid).set (newuser);   

          database.ref ('users/' + user.uid).once ('value').then ( res => {
             const fullUserInfo = res.val(); 
    
             console.log ('full info ', fullUserInfo);
             store.setState ( {
                user: {
                   id : user.uid,
                   email :  fullUserInfo.email,
                   fullname :  fullUserInfo.fullname,              
                }
             })
          })
    
       })
       
    }
    
    export function signOut () {
       auth.signOut();
       store.setState ( {
          successLogin : false,
          user: {
             id :'',
             email :  ''
          }
       })
    }
    
    export function signIn (user, pass) {
       auth.signInWithEmailAndPassword(user, pass).then (userObj => {
    
          database.ref ('users/' + userObj.uid).once ('value').then ( res => {
             const fullUserInfo = res.val(); 
    
             console.log ('full info ', fullUserInfo);
             store.setState ( {
               
                user: {
                   id : userObj.uid,
                   email :  fullUserInfo.email,
                   fullname :  fullUserInfo.fullname,              
                }
             })
          })
       })
    }
    
    
    auth.onAuthStateChanged(user => {
       if (user) {
          console.log('user', user);
          let usersRef = database.ref('/users');
          let userRef = usersRef.child(user.uid);
          store.setState ( {
             successLogin : true
          })
       }
    });

    export function readBoard () {
        database.ref('stages').on ('value', res => {
           let stages = []
           res.forEach ( snap  => {
              const stage = snap.val();
              stages.push (stage);
           })
           store.setState ({
              stages : stages
           }) 
        });
     
        database.ref('task').on ('value', res => {
           let task = [];
           res.forEach ( snap  => {
               const tasks = snap.val();
               task.push (tasks)
           })      
           store.setState ({
              task : task
           }) 
        });   
     }
     
     export function  addStage (text) {
         console.log("holi")
     
        let stages = [...store.getState().stages];
        stages.push (  text )  
        database.ref('stages').push (text);
     }
     
     export function  addTask (stage, text) {
        console.log ('addTask:', stage + ' - ' +  text);
     
        let task = [...store.getState().task];
     
        let newTask = {
           id : store.getState().task.length,
           title: text,
           stage : stage
        } 
     
        database.ref('task/' + newTask.id).set (newTask);
     }