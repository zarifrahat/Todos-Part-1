import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import {recieveTodo} from './actions/todo_actions'
import { recieveTodos } from './actions/todo_actions'
import App from './components/app'
import Root from './components/root'
import allTodos from './reducers/selectors'



document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);

})

window.store = configureStore;
window.recieveTodo = recieveTodo;
window.recieveTodos = recieveTodos;




