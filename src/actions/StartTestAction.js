import {

  GET_COUNTRIES_RELEGION_ATTEMPING,
  GET_COUNTRIES_RELEGION_SUCCESS,
  GET_COUNTRIES_RELEGION_FAILED
} from './types';

import  {Config}  from '../Constant/Config'
import axios from 'axios';


export const getCountriesAndRelegion = () => {

  return async (dispatch) => {
    dispatch({
      type: GET_COUNTRIES_RELEGION_ATTEMPING
    });

    const resp1 = await axios.get(Config.countries);
    const resp2 = await axios.get(Config.religions);

    if (resp1.data && resp2.data) {

      dispatch({
        type: GET_COUNTRIES_RELEGION_SUCCESS, countries: resp1.data.data, religions: resp2.data.data
      });
    } else {
      dispatch({
        type: GET_COUNTRIES_RELEGION_FAILED
      });
    }


  }

}
