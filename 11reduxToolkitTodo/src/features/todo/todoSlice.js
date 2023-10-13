import { createSlice, nanoid } from "@reduxjs/toolkit";

// step 1
const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

// step 2
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // in context api we declare the functions but don't define them
    // while in redux we also define them
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                todo.id !== action.payload
            })
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer