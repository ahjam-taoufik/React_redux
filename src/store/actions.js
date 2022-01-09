//=====ACTIONS=======
const increment=(val=1)=>{
    return {
      type:"INC",
      payload:val
    }
 }
 
 const decrement=()=>{
    return {
      type:"DEC",
      payload:1
    }
 }


 export {
    increment, 
    decrement
 }