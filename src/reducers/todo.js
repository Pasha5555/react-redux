import { ADD_POST_INFO } from '../constants/todo_types';

const todoReducer = (state=[], action)=>{
    switch(action.type) {
        case 'ADD_ITEM_TODO':
            return[
                ...state,
                {
                    
                    text: action.text,
                    image: action.image,
                    name: action.name,
                    nickname: action.nickname,
                    photo: action.photo
                    
                }
            ]
        default:
            return state    
    }
}
 export default todoReducer;