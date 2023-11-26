import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from './Reducer';

const Store=configureStore({
    reducer:{
        ticketBooking:Reducer
    }
})
export default Store;