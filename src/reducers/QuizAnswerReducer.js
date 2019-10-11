import {

  
    QUIZ_ANSWER_ATTEMPING,
    QUIZ_ANSWER_FAILED,
    QUIZ_ANSWER_SUCCESS

} from '../actions/types';

const INITIAL_STATE = { loading: false, data:null,error:null };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case QUIZ_ANSWER_ATTEMPING:
            return { ...state, loading: false }

        case QUIZ_ANSWER_SUCCESS:
            return { ...state, loading: false, data: action.payload }

        case QUIZ_ANSWER_FAILED:
            return { ...state, loading: false }

        default: return state;

    }

};