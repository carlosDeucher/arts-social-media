import { LOGIN_USER, LOGOUT_USER } from "../actions/actionsType";

const initialState={
  user:null,
  userId:null,
  authenticated:false,
  userPhoto:null,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action){
  switch(action.type){
    case LOGIN_USER:
      console.log("deu certo",action.payload )
      return {
        ...state,
        username:action.payload.name,
        userId:action.payload.id,
        authenticated:true,
        userPhoto:action.payload.userPhoto,
      };
      case LOGOUT_USER:
        console.log("logout" )
        return {
          ...initialState
        };
      default:return state;
  };
};