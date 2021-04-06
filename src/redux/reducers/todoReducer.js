import {ADD_TODO, SET_TODO, SET_TODOS} from "../types";

const initialState = {
    data: new Map(),
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        //set fetched todos
        case SET_TODOS:
            return {
                ...state,
                data: new Map(state.data).set(action.payload.userId, action.payload.data)
            }
        //add created todo to list
        case ADD_TODO:
            let newData = state.data.get(action.payload.userId);
            newData.unshift(action.payload);
            return {
                ...state,
                data: new Map(state.data).set(action.payload.userId, newData),
            }
        // update edited todo to list
        case SET_TODO:
            let data = state.data.get(action.payload.userId);
            let index = data.findIndex((todo => todo.id === action.payload.id));
            data[index].status = true;
            data.sort((a, b) => (b.status && !a.status) ? -1 : 1)
            return {
                ...state,
                data: new Map(state.data).set(action.payload.userId, data),
            }
        default:
            return state
    }
}
export default userReducer