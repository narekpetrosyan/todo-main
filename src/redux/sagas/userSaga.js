import {put, call, takeEvery} from 'redux-saga/effects';
import DB from "../../db";
import {USERS_FETCH} from "../types";
import {setUsers} from "../actions/userAction";

//saga watchers
export default function* todoWatcher() {
    yield takeEvery(USERS_FETCH, usersFetchWorker);
}

//workers start
function* usersFetchWorker() {
    const res = yield call(usersFetch);
    yield put(setUsers(res))

}
//workers end

async function usersFetch() {
    const res = await DB.collection("users").get();
    const data = [];
    await res.forEach((doc) => {
        data.push({
                id: doc.id,
                ...doc.data()
            }
        )
    });
    return data
}




