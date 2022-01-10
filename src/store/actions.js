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

const login=()=>{
    return {
        type:"LOGIN",
        
      } 
}

const logout=()=>{
    return {
        type:"LOGOUT",
        
      } 
}

 export {
    increment, 
    decrement,
    login,
    logout
 }