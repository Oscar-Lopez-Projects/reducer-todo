

export const TOGGLE_TODO = "TOGGLE_TODO";

export const initialTodo = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const todoReducer = (state, action) => {
    if(action.type === TOGGLE_TODO){
        return{
            ...state,
            completed: false
        };
    }else if(action.type ===)
}