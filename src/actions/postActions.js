import {ADD_MESSAGES} from "./types"
import store from "../store/store"

const messages = [
    {message:"This"},
    {message:"Is"},
    {message:"Finally Working!!!!!!!!!!!"}
]
const getMessages = () => {
    console.log(store.getState())
   return(store.dispatch({type:ADD_MESSAGES, payload:messages}))
    
}
export default getMessages
    
