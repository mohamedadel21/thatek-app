import {

  
    QUIZ_RESULT_ATTEMPING,
    QUIZ_RESULT_SUCCESS  ,
    QUIZ_RESULT_FAILED   

} from '../actions/types';

const INITIAL_STATE = { loading: false, result:{},error:null };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case QUIZ_RESULT_ATTEMPING:
            return { ...state, loading: false }

        case QUIZ_RESULT_SUCCESS:
            return { ...state, loading: false, result: action.payload }

        case QUIZ_RESULT_FAILED:
            return { ...state, loading: false }

        default: return state;

    }

};