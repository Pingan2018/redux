export default function createStore(reducer, initState) {
    let state = initState || {}
    let listeners = []
    function getState() {
        return state
    }
    function dispatch(action) {
        state = reducer(state, action)
        listeners.forEach(f => f())
    }
    function subscribe(fn) {
        listeners.push(fn)
        return function unSubscribe() {
            listeners = listeners.filter(f => f !== fn)
        }
    }
    dispatch({ type: '@@redux/INIT$' })
    return {
        getState,
        dispatch,
        subscribe
    }
}


// function isPlainObject(obj) {
//     if (typeof obj !== 'object' || obj === null) return false

//     let proto = obj
//     while (Object.getPrototypeOf(proto) !== null) {
//         proto = Object.getPrototypeOf(proto)
//     }

//     return Object.getPrototypeOf(obj) === proto
// }