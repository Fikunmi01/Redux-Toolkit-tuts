import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
// const { getDefaultMiddleware } = require('@reduxjs/toolkit')
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

// const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;