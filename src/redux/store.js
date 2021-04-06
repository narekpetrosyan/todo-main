import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers/rootReducer';
import sagaWatcher from "./sagas/rootSaga";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
saga.run(sagaWatcher);
export default store