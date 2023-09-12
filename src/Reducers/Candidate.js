import { ACTION_TYPES } from "../Actions/Candidate";

const initialState ={
    list:[]
}

export const candidate = (state = initialState,action) =>{
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return{
                ...state,
                list: [...action.payload]
            }    
        default:
            return state
    }
}