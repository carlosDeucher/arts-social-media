import { LOGIN_USER, LOGOUT_USER } from "./actionsType";
//Action Creator
export function loginUser(user){
  return {
    type:LOGIN_USER,
    payload:user,
    };
}
export function logoutUser(){
  return {
    type:LOGOUT_USER,
    };
}
