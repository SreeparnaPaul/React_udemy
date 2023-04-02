const redux = require("redux");

const counterReducer = (state={counter:0},action) => {
    if(action.type==="increment"){
        return {
            counter:state.counter + 1
        };
    }
    if(action.type==="decrement"){
        return {
            counter:state.counter - 1
        };
    }
    return state;
}  //in counterReducer, we should initialize the state , for the first time execution
const store = redux.createStore(counterReducer);

console.log(store.getState());// if there is no dispatch function, then the subscribe will not work
//in that case we can get the latest state value by the above way.

const counterSubscriber =()=>{
   const latestState = store.getState();
   console.log(latestState);
}

store.subscribe(counterSubscriber);
store.dispatch({type:"increment"});
store.dispatch({type:"decrement"});