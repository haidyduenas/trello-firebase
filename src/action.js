import store from './store';
import {auth, database, storage} from './firebase';
    
export function signUp (fullname, email, pass) 
{

   auth.createUserWithEmailAndPassword (email, pass).then ( user => {
      let newuser = {
         fullname, email
      }
      database.ref ('users/' + user.uid).set (newuser);   
      
      database.ref ('users/' + user.uid).once ('value').then ( res => {
         const fullUserInfo = res.val(); 

         store.setState ( {
            user: {
               id : user.uid,
               email :  fullUserInfo.email,
               fullname :  fullUserInfo.fullname              
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

export function addNewBoard (title, userId) {

   database.ref ('boards/').push ({
      title: title,
      user_id: userId
   }).then ( res => {
   });   

}

export function signIn (user, pass) {
   auth.signInWithEmailAndPassword(user, pass);
}

export function  addStage (text, board_id) {
   let newobj = {
      title: text, 
      board_id : board_id
   }
   
   database.ref('stages').push (newobj);
}

export function  addTask (stageId, text) {

   let tasks = [...store.getState().tasks];

   let newTask = {
      id : store.getState().tasks.length,
      title: text,
      stageId : stageId
   } 
   database.ref('tasks/' + newTask.id).set (newTask);
}

auth.onAuthStateChanged(user => {
   if (user) {
      let usersRef = database.ref('/users');
      let userRef = usersRef.child(user.uid);

      database.ref ('users/' + user.uid).once ('value').then ( res => {
         const fullUserInfo = res.val(); 
         
         store.setState ( {
            successLogin : true,
            user: {
               id : user.uid,
               email :  fullUserInfo.email,
               fullname :  fullUserInfo.fullname               
            }
         })
      });

      database.ref('boards').on ('value', res => {
         let boards = [];
         res.forEach ( snap  => {
             const board = snap.val();
             board.id = snap.key;
             boards.push (board)
         })      
         store.setState ({
            boards : boards.filter (board => board.user_id === user.uid)
         }) 
      });  

      database.ref('stages').on ('value', res => {
         let stages = []
         res.forEach ( snap  => {
            const stage = snap.val();
            stage.id = snap.key;
            stages.push (stage);
         })
         store.setState ({
            stages : stages
         }) 
      });
   
      database.ref('tasks').on ('value', res => {
         let tasks = [];
         res.forEach ( snap  => {
             const task = snap.val();
             tasks.push (task)
         })      
         store.setState ({
            tasks : tasks
         }) 
      });  

   }
});