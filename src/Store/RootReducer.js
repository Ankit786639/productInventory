import { combineReducers } from "redux";
import LoginReducer from '../Store/Reducers/loginReducer';

const appReducer = combineReducers({
    LoginReducer
  })
  
  export const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      state = undefined
    }
  
    return appReducer(state, action)
  }