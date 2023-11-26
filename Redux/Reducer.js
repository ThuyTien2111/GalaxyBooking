import { createReducer } from '@reduxjs/toolkit';
import { setHistory, setTicketAdded, setUser} from './Action';

const initState={
    ticketAdded:{},
    history:[],
    user:{},
}
export const Reducer=createReducer(initState, {
    [setTicketAdded]:(state, action)=>{
        state.ticketAdded=action.payload
    },
    [setUser]:(state, action)=>{
        state.user=action.payload
    },
    [setHistory]:(state)=>{
        if(Object.keys(state.ticketAdded).length!=0){
            state.history.push(state.ticketAdded)
        }
    }
})