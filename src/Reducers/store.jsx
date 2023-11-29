
import { createStore } from 'redux';

const INCREMENT= 'INCREMENT'
const DECREMENT='DECREMENT'

const initialState={
    count:0
}
const Increase=()=>{
dispatch( {
    type:INCREMENT,
payload:"count is increasing"
})
}
const Decrease=()=>{
    dispatch( {type:DECREMENT,
    payload:"count is decreasing"})
    }

const countReducer=(state=initialState, action)=>{
    switch(action.type){
        case INCREMENT:
        return{
            ...state,
            count:state.count+ 1
        };
        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            };
            default:
                return state
    }
}
const store= createStore(countReducer);
export default store;
