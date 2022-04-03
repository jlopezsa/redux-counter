// Store (Mi tienda inicial)
const initialState = {
  count: 0,
}

// Reducer function
function reducer(state = initialState, action){
  switch (action.type) {
    case 'ADD':
      return {
        ...state, // crea una cópia de la tienda
        count: state.count + 1,
      }
      case 'REMOVE':
      return{
        ...state, // crea uuna cópia de la tienda
        count: state.count - 1,
      }
    default:
      return state;
  }
}

export default reducer;
