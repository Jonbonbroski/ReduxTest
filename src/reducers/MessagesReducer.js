import {ADD_MESSAGES} from "../actions/types"
import store from "../store/store"

const initialState = {

    messages:[{message:"Hello?"}]
}

function messagesReducer(state = initialState, action){
    console.log("Message Reducer")
    console.log(action.payload)
    switch(action.type){
        case ADD_MESSAGES:
            return {messages:[action.payload]}
        default:
        return state;

    }
    console.log(store.getState())
}

export default messagesReducer
