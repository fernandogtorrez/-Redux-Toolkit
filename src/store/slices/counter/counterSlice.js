import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 10,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment: (state,action) =>{
            console.log(action)
            state.value += 1
        },
        decrement: (state) =>{
            state.value -= 1
        },
        reset: (state) =>{
            state.value = initialState.value
        },
        incrementBy: (state, action) => {
            console.log(action)
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementBy, reset } = counterSlice.actions

export default counterSlice.reducer