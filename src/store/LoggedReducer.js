const initstate = {
  logged:false
};

function LoggedReducer(state = initstate, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, logged:true };
    case "LOGOUT":
      return { ...state, logged:false };
    default:
      return state;
  }
}

export default LoggedReducer;
