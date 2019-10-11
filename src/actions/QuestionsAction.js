import {

  GET_QUESTIONS_ATTEMPING,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILED

} from './types';

import { Config } from '../Constant/Config'
import axios from 'axios';
import {AsyncStorage} from 'react-native'

export const getQuestions = () => {


  return async (dispatch) => {

    let token =await AsyncStorage.getItem('access_token');

    dispatch({
      type: GET_QUESTIONS_ATTEMPING
    });
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token

    }


    const resp = await axios({ method: 'GET', url: Config.getQuestion, headers: headers });
    if (resp.data) {
      console.log(resp.data);
      
      dispatch({
        type: GET_QUESTIONS_SUCCESS, payload: resp.data
      });

    } else {
      dispatch({
        type: GET_QUESTIONS_FAILED
      });
    }



  }

}
