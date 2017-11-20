import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyAYdKzfj7L4TtWwN_ltAjefGavt4ri9Eg0",
    authDomain: "trello-firebase-8eeec.firebaseapp.com",
    databaseURL: "https://trello-firebase-8eeec.firebaseio.com",
    projectId: "trello-firebase-8eeec",
    storageBucket: "trello-firebase-8eeec.appspot.com",
    messagingSenderId: "123277714141"
  };
  firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
