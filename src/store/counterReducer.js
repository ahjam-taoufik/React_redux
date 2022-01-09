const initstate = {
  count1: 10,
};

function counterReducer(state = initstate, action) {
  switch (action.type) {
    case "INC":
      return { ...state, count1: state.count1 + action.payload };
    case "DEC":
      return { ...state, count1: state.count1 - action.payload };
    default:
      return state;
  }
}

export default counterReducer;
