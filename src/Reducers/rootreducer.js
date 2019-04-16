import authReducer from './authreducer'
import productReducer from './productreducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer
});

export default rootReducer
