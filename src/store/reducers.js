
const initialState = {
  count: 0,
}

function reducer(state = initialState, action){
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + 1,
      }
      case 'REMOVE':
      return{
        count: state.count - 1,
      }
    default:
      return state;
  }
}

export default reducer;
