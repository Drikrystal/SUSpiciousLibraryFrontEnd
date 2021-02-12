import { createStore } from "redux";
import reducer from "./reducers/index"

/*const initialStore = {
    books : [],
    publishers : [],
    authors : [],
    categories :  [],
    cart : {
        items : [],
        total : 0,
        amount : 0
    },
    session : {
        token : null
    }
}*/

export const store = createStore(reducer)
