import {
    GET_COUNTRIES_RELEGION_ATTEMPING,
    GET_COUNTRIES_RELEGION_SUCCESS,
    GET_COUNTRIES_RELEGION_FAILED
} from '../actions/types';

const INITIAL_STATE = { loading: false, countries: [], religions: [] };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GET_COUNTRIES_RELEGION_ATTEMPING:
            return { ...state, loading: false }

        case GET_COUNTRIES_RELEGION_SUCCESS:
            return { ...state, loading: false, religions: action.religions, countries: action.countries }

        case GET_COUNTRIES_RELEGION_FAILED:
            return { ...state, loading: false }

        default: return state;

    }

};