import { ADD_POST_INFO } from '../constants/todo_types';
import { userPosts } from './userPostsData'

const userInfoReducer = (state=userPosts, action)=>{
    switch(action.type) {
        case 'ADD_POST_INFO':
          return{
              ...state,
              posts: [...state.posts, action.payload]   
            }     
        default:
            return state    
    }
}
 export default userInfoReducer;