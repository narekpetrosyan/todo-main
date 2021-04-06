import {all, fork} from "redux-saga/effects"
import userSagaWatcher from "./userSaga"
import todoSagaWatcher from "./todoSaga"

export default function* rootSagaWatcher() {
    yield all([
        userSagaWatcher,
        todoSagaWatcher
    ].map(fork));
}