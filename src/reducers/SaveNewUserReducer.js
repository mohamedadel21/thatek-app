import {

    SAVE_NEW_USER_ATTEMPING,
    SAVE_NEW_USER_SUCCESS  ,
    SAVE_NEW_USER_FAILED   

} from '../actions/types';

const INITIAL_STATE = { loading: false, accessToken: null,error:null };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SAVE_NEW_USER_ATTEMPING:
            return { ...state, loading: false }

        case SAVE_NEW_USER_SUCCESS:
            return { ...state, loading: false, accessToken: action.payload }

        case SAVE_NEW_USER_FAILED:
            return { ...state, loading: false }

        default: return state;

    }

};