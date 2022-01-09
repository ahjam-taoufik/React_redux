const redux=require('redux')
const createStore=redux.createStore


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


const initial={
    numberOfCake:10,
    numberOfIceCream:10
}

const reducer=(state=initial,action)=>{
    switch (action.type) {
        case 'BUY-CAKE':
           return {...state,numberOfCake:state.numberOfCake-1 } 
        case 'BUY-ICECREAM':
           return {...state,numberOfIceCream:state.numberOfIceCream-1 } 
        default:
         return state;
    }
}

const store=createStore(reducer)
console.log('Initial state' , store.getState());
const unsbscribe= store.subscribe(()=>console.log('Update state', store.getState()))
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
unsbscribe()
