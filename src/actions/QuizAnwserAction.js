import {

  QUIZ_ANSWER_ATTEMPING,
  QUIZ_ANSWER_SUCCESS  ,
  QUIZ_ANSWER_FAILED   
} from './types';

import  {Config}  from '../Constant/Config'
import axios from 'axios';
import {AsyncStorage} from 'react-native'

export const quizAnwser = (questions) => {
  
  return async (dispatch) => {
    let token =await AsyncStorage.getItem('access_token');
    
    dispatch({
      type: QUIZ_ANSWER_ATTEMPING
    });

    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
  
    }
  

  const resp= await axios({ method: 'POST', url: Config.quizAnswer,data:{questions:questions,time:532}, headers: headers });
  if (resp.data) {
    console.log(resp.data);
    
    dispatch({
      type: QUIZ_ANSWER_SUCCESS, payload: resp.data
    });

  } else {
    dispatch({
      type: QUIZ_ANSWER_FAILED
    });
  }



  }

}
