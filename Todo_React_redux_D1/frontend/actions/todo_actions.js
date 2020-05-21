export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";


export const recieveTodos = ((todos) =>{
    return {
        type: RECEIVE_TODOS,
        todos: todos
    }
});

export const recieveTodo = ((id = Math.floor(Math.random() * 10000), title, body, done) => {
    return {
        id: id,
        type: RECEIVE_TODO,
        title: title,
        body: body,
        done: false
    }
});