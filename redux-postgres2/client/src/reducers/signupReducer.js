import * as types from "../constants";

const initialState = {
  isAuth: false,
  user: {}
};

export default function signup(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case types.POST_SIGNUP_REQUEST:
      return {
        isAuth: action.payload ? true : false,
        user: action.payload
      };
    default:
      return state;
  }
}
