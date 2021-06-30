import { createStore } from "redux";
import rootReducer from "../service/rootReducer";

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(reduxThunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = createStore(rootReducer);

export default store;
