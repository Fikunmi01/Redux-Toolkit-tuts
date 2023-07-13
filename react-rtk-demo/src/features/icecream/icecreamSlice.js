import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
    numOfIcecream: 20,
}

const icecreamSlice = createSlice({
    name: 'Ice cream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecream--
        },
        restocked: (state, actions) => {
            state.numOfIcecream += actions.payload
        }
    },
    // In this scenario when we have an extra reducer such that when a user buys a cake gets an ice cream free builder method is the best
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecream--
    //     }
    // }

    // It allows create slice to interact with other slides besides the slides it has generated
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numOfIcecream--
        })
    }
})

// module.exports = icecreamSlice.reducer
export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions