import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import tokenReducer from './App/components/tokeninterface/issuetoken/issueTokenReducer'
import authReducer from './App/components/authentication/authReducer'
import web3Reducer from './App/shared/util/web3/web3Reducer'

const reducer = combineReducers({
  routing: routerReducer,
  token: tokenReducer,
  user: authReducer,
  web3: web3Reducer,
})

export default reducer
