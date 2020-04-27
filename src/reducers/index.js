import { combineReducers } from 'redux'
import todoReducer from './todo';
import postsInfoReducer from './postsInfo'


export default combineReducers({
    addPost: todoReducer,
    availablePosts: postsInfoReducer
})