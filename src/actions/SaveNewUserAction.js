import {

SAVE_NEW_USER_ATTEMPING,
SAVE_NEW_USER_SUCCESS  ,
SAVE_NEW_USER_FAILED   

} from './types';

import  {Config}  from '../Constant/Config'
import axios from 'axios';
import {AsyncStorage} from 'react-native'


export const saveNewUser = (gender,birth,country,religion) => {

  return async (dispatch) => {
    dispatch({
      type: SAVE_NEW_USER_ATTEMPING
    });
    

    const resp= await axios.post(Config.newUser+'birth_date='+birth+'&gender='+gender+'&country='+country+'&religion='+religion);
      
    if (resp.data) {
      await AsyncStorage.setItem('access_token',resp.data.token.access_token);      
      dispatch({
        type: SAVE_NEW_USER_SUCCESS, payload: resp.data.token.access_token
      });
    } else {
      dispatch({
        type: SAVE_NEW_USER_FAILED
      });
    }


  }

}
