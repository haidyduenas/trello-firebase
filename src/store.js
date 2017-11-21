import createStore from 'redux-zero'


const initialState = {
    successLogin : false,
       user : {
        id : null,
        email :  null,
        fullname :  null,            
       },
       boards : null,
       stages : null,
       tasks : null  
}

const store = createStore(initialState)
export default store