import {put, call, takeEvery} from 'redux-saga/effects';
import firebase from "firebase/app";
import DB from "../../db";
import {CREATE_TODO, TODOS_FETCH, UPDATE_TODO} from "../types";
import {addTodo, setTodo, setTodos} from "../actions/todoAction";
import {updateUser} from "../actions/userAction";

//saga watchers
export default function* todoWatcher() {
    yield takeEvery(TODOS_FETCH, todosFetchWorker);
    yield takeEvery(CREATE_TODO, createTodoWorker);
    yield takeEvery(UPDATE_TODO, updateTodoWorker);
}

//workers start

function* todosFetchWorker(action) {
    const res = yield call(todosFetch, action.payload);
    yield put(setTodos({data: res, userId: action.payload}))
}

function* createTodoWorker(action) {
    const res = yield call(createTodo, action.payload);
    if (res.added) {
        yield put(addTodo(res.todo))
        yield put(updateUser('todos'))
    }

}

function* updateTodoWorker(action) {

    const res = yield call(updateTodo, action.payload);
    if (res.updated) {
        yield put(setTodo(action.payload))
        yield put(updateUser('complete'))
    }

}

//workers end

async function todosFetch(userId) {
    const res = await DB.collection("todos")
        .where('userId', '==', userId)
        .orderBy('status', 'asc')
        .orderBy('updatedAt', 'desc')
        .get();
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

async function createTodo(data) {

    let todo = {
        text: data.text,
        userId: data.id,
        status: false,
        updatedAt: new Date().toUTCString()
    }
    try {
        const todoRef = DB.collection('todos');
        const res = await todoRef.add(todo);
        todo.id = res.id;
        const userRef = DB.collection('users').doc(data.id);
        await userRef.update({todos: firebase.firestore.FieldValue.increment(1)});
        return {added: true, todo}
    } catch (e) {
        return e
    }
}

async function updateTodo(data) {
    try {
        const docRef = DB.collection('todos').doc(data.id);
        await docRef.update({
            status: true,
            updatedAt: new Date().toUTCString()
        });
        const userRef = DB.collection('users').doc(data.userId);
        await userRef.update({complete: firebase.firestore.FieldValue.increment(1)});
        return {updated: true}
    } catch (e) {
        return e
    }
}




