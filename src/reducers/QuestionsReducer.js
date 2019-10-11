import {

  
    GET_QUESTIONS_ATTEMPING,
    GET_QUESTIONS_SUCCESS  ,
    GET_QUESTIONS_FAILED   

} from '../actions/types';

const INITIAL_STATE = { loading: false, questions: null,error:null };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GET_QUESTIONS_ATTEMPING:
            return { ...state, loading: false }

        case GET_QUESTIONS_SUCCESS:
            return { ...state, loading: false, questions: action.payload }

        case GET_QUESTIONS_FAILED:
            return { ...state, loading: false }

        default: return state;

    }

};