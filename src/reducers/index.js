import {combineReducers} from 'redux';
import StartTestReducer from '../reducers/StartTestReducer'
import SaveNewUserReducer from '../reducers/SaveNewUserReducer'
import QuestionsReducer from '../reducers/QuestionsReducer'
import QuizAnswerReducer from '../reducers/QuizAnswerReducer'
import QuizResultReducer from '../reducers/QuizResultReducer'
import AuthReducer from '../reducers/AuthReducer'

export default combineReducers({
    startTest:StartTestReducer,
    newUser:SaveNewUserReducer,
    question:QuestionsReducer,
    quizAnswer:QuizAnswerReducer,
    quizResult:QuizResultReducer,
    auth:AuthReducer,
   
})