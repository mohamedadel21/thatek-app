import {
  SIGNUP_ATTEMPING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_ATTEMPING,
  LOGIN_SUCCESS,
  LOGIN_FAILED

} from './types';

import { Config } from '../Constant/Config'
import axios from 'axios';
import {AsyncStorage} from 'react-native'


export const createNewAccount = ( email, password) => {

  
  return async (dispatch) => {
    let token =await AsyncStorage.getItem('access_token');
    dispatch({
      type: SIGNUP_ATTEMPING
    });
    
    try {
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token

    }

    const resp = await axios({ method: 'POST', url: Config.signup, headers: headers, data: { email, password } });
    if (resp.data) {

      dispatch({
        type: SIGNUP_SUCCESS, payload: resp.data
      });

    } else {
      dispatch({
        type: SIGNUP_FAILED
      });
    }
  }catch(err){

      dispatch({
        type: SIGNUP_FAILED, payload: 'البريد الالكتروني موجود بالفعل'
      });
    
  }
  }

}


export const loginWithEmailAndPassword = (email, password) => {


  return async (dispatch) => {
    dispatch({
      type: LOGIN_ATTEMPING
    });

    try {


      const resp = await axios({ method: 'POST', url: Config.login, data: { email, password } });
      if (resp.data) {
        console.log(resp.data);
        
        dispatch({
          type: LOGIN_SUCCESS, payload: resp.data
        });

      } 
       
      
    } catch (err) { 
        
        dispatch({
          type: LOGIN_FAILED, payload: 'البريد الالكتروني او كلمة المرور غير صحيحة'
        });
      
     
    }

  }

}
