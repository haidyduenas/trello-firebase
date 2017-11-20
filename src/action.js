import store from './store';
import {auth, database, storage} from './firebase';
export const addBoard = text => {
   let oldList = store.getState().board;
   const newList = oldList.concat({
      id: oldList.length,
      text: text
   });
   store.setState({
      todos: newList
   });
   database.ref("user/"+ store.getState().user.id + "/boards/").push(text);
};
export const isClick = (e) =>{
    store.setState({
        isClick : true,
    })
}

export const addComment = (name,comment) => {    
        const Newtask = [...store.getState().task, {
            name: name,
            comment : comment,
        }];
    
        store.setState({
            task: Newtask
        })
    }

    
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