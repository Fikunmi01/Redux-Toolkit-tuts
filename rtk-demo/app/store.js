const configureStore = require('@reduxjs/toolkit').configureStore
// const { getDefaultMiddleware } = require('@reduxjs/toolkit')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const reduxLogger = require('redux-logger')
const userReducer= require('../features/user/userSlice')

const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store;