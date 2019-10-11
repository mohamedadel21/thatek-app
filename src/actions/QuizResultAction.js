import {

  QUIZ_RESULT_ATTEMPING,
  QUIZ_RESULT_SUCCESS,
  QUIZ_RESULT_FAILED
} from './types';

import  {Config}  from '../Constant/Config'
import axios from 'axios';
import {AsyncStorage} from 'react-native'

export const QuizResult = ( id) => {

console.log(AsyncStorage.getItem('access_token'));


  return async (dispatch) => {
    let token =await AsyncStorage.getItem('access_token');
  
    
    dispatch({
      type: QUIZ_RESULT_ATTEMPING
    });
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' +token

    }


   const resp=await axios({ method: 'GET', url: Config.quizResult+id, headers: headers });
   if (resp.data) {

    dispatch({
      type: QUIZ_RESULT_SUCCESS, payload: resp.data
    });

  } else {
    dispatch({
      type: QUIZ_RESULT_FAILED
    });
  }



  }

}
