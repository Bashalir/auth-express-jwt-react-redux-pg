import * as types from "./../constants";

export const getUserAction = () => {
  return dispatch => {
    return fetch("/api/check/token")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: types.LOGIN_REQUEST, payload: json });
      });
  };
};

export const postSignUpAction = () => {
  return dispatch => {
    return fetch("/api/check/token")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch({ type: types.POST_SIGNUP_REQUEST, payload: json });
      });
  };
};

export const logginAction = values => {
  return dispatch => {
    return fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        dispatch(getUserAction());
      })
      .catch(err => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };
};

export const signUpAction = values => {
  return dispatch => {
    return fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("restutu", res);
        dispatch(postSignUpAction());
      })
      .catch(err => {
        console.error(err);
        alert("Error signup");
      });
  };
};

export const logoutAction = () => {
  return dispatch => {
    return fetch("/api/auth/logout").then(response => {
      dispatch({ type: types.LOGOUT });
    });
  };
};
