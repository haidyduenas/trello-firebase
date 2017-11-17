import store from './store';

export const addBoard = text => {
   let oldList = store.getState().board;
   const newList = oldList.concat({
      id: oldList.length,
      text: text
   });
   store.setState({
      todos: newList
   });
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
 