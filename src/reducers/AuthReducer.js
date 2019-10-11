import {

    SIGNUP_ATTEMPING,
    SIGNUP_SUCCESS  ,
    SIGNUP_FAILED  ,

    LOGIN_ATTEMPING,
    LOGIN_SUCCESS,
    LOGIN_FAILED 
  

} from '../actions/types';

const INITIAL_STATE = { loading: false, signup: null,error:null, login:null ,loadingLogin: false,errorLogin:null };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SIGNUP_ATTEMPING:
            return { ...state, loading: false }

        case SIGNUP_SUCCESS:
            return { ...state, loading: false, signup: action.payload }

        case SIGNUP_FAILED:
            return { ...state, loading: false ,error:action.payload}

        case LOGIN_ATTEMPING:
            return { ...state, loadingLogin: false }
    
        case LOGIN_SUCCESS:
            return { ...state, loadingLogin: false, login: action.payload }
    
        case LOGIN_FAILED:
            return { ...state, loadingLogin: false ,errorLogin:action.payload}
    
        default: return state;

    }

};