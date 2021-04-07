import {configureStore} from '@reduxjs/toolkit';
import reducer from './todos';

export default function confStore (){
    return configureStore({
        reducer
    });
};