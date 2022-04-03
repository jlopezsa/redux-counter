import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";

const store = createStore(reducer, composeWithDevTools()); // Función que retorna un objeto

export default store;
