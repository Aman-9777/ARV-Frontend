import { combineReducers } from 'redux';
import authReducer from './features/userAuth/auth';
import loadingReducer from './features/loading';
import companyReducer from './features/companySlice';
import voterReducer from './features/voterSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  companies: companyReducer,
  voters: voterReducer
  
});

export default rootReducer;
