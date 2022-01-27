export const INCREMENT = 'INCREMENT';  
export const DECREMENT = 'DECREMENT'; 

export function increment(){
    return{
        type : INCREMENT
    };
}
export function decrement(){
    return{
        type : DECREMENT
    };
}
const initialState={
    counter:0
};
const counters=( state= initialState, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return({
                counter:state.counter+1
            });
        case 'DECREMENT' : 
        return({
            counter:state.counter-1
        });
        default :
            return state;
    }
}
export default counters;