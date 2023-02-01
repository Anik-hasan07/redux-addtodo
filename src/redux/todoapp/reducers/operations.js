import { ADD_TODO } from "../actions";

const initialState=[
    {id: 1, todo: 'Buy Laptop', completed: false},
    {id: 2, todo: 'Master Redux', completed: false},
    {id: 3, todo: 'Watering Plants', completed: true},
];

export const operationsReducer=(state=initialState,action)=>{
        switch(action.type){
            case ADD_TODO:
                return[...state,action.payload]


            default: return state;
        }
}