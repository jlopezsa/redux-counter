import { createStore } from "redux"
import reducer from "./reducers";

const store = createStore(reducer); // Función que retorna un objeto

export default store;
