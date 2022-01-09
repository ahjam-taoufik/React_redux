const redux=require('redux')
const createStore=redux.createStore
const combineReducers=redux.combineReducers


const BUY_CAKE= 'BUY-CAKE'
const BUY_ICECREAM= 'BUY-ICECREAM'


const buyCake=()=>{
    return {
        type:BUY_CAKE,
    }
}

const buyIceCream=()=>{
    return {
        type:BUY_ICECREAM,
    }
}



const initialCake={
    numberOfCake:10,
   
}

const initialIceCream={
    numberOfIceCream:10
}




const reducercake=(state=initialCake,action)=>{
    switch (action.type) {
        case 'BUY-CAKE':
           return {...state,numberOfCake:state.numberOfCake-1 } 
        default:
         return state;
    }
}


const reducerIceCream=(state=initialIceCream,action)=>{
    switch (action.type) {
        case 'BUY-ICECREAM':
           return {...state,numberOfIceCream:state.numberOfIceCream-1 } 
        default:
         return state;
    }
}



const rootReducer=combineReducers({
    cake:reducercake,
    Ice:reducerIceCream
})
const store=createStore(rootReducer)
console.log('Initial state' , store.getState())
const unsbscribe= store.subscribe(()=>console.log('Update state', store.getState()))
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())

unsbscribe()
