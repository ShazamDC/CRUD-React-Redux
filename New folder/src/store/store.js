import {createStore} from 'redux';
import {Reducer} from './../reducer/reducer';

export const store=createStore(Reducer);
store.subscribe(()=>{
    console.log(store.getState());
})