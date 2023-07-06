const redux = require('redux')
const createStore = redux.legacy_createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

// const reduxLogger = require('redux-logger')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCK = 'CAKE_RESTOCK'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCK = 'ICECREAM_RESTOCK'


const initialCakeState = {
    numOfCake: 10,
}

const initialIceCreamState = {
    numOfIceCream: 20
}

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCK,
        payload: qty
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCK,
        payload: qty
    }
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                // Here we make use of the spread operator if we have more than one property in our initial state object
                ...state,
                numOfCake: state.numOfCake - 1
            }
        case CAKE_RESTOCK:
            return {
                ...state,
                numOfCake: state.numOfCake + action.payload
            }

        default:
            return state;
    }
}

const iceCreamreducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        case ICECREAM_RESTOCK:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload
            }
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamreducer
})

const store = createStore(rootReducers, applyMiddleware(logger))

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => { })

const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch)

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)

unsubscribe()
