import {actionType} from './constants'

//login action 
export const loginAction =(data)=> {
  return {
    type:actionType.LOGIN_SUCCESS,
    payload:data,
  };
}
//add action 
export const addUniverAction =(data)=> {
  console.log(data);
  return {
    type:actionType.ADD_FORM_UNIVERSITY,
    payload: data,
  };
}
//edit action 
export const editUniverAction =(data)=> {
  return {
    type:actionType.EDIT_FORM_UNIVERSITY,
    payload: data,
  };
}
