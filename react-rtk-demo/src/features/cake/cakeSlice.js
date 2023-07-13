import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCake: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCake--
        },
        restocked: (state, actions) => {
            state.numOfCake += actions.payload
        }
    }
})

// module.exports = cakeSlice.reducer;
export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions