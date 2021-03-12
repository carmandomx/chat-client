import axios from "axios";

export const chatActionTypes = {
  login: "LOGIN",
  loginSuccess: "LOGIN_SUCCESS",
  loginFail: "LOGIN_FAIL",
  signup: "SIGNUP",
  signupSuccess: "SIGNUP_SUCCESS",
  signupFail: "SIGNUP_FAIL",
};

export const login = (room) => ({
  type: chatActionTypes.login,
  payload: room,
});

export const loginSuccess = (auth) => ({
  type: chatActionTypes.loginSuccess,
  payload: auth,
});

export const loginFail = (err) => ({
  type: chatActionTypes.loginFail,
  payload: err,
});

// login thunk
export const loginThunk = (loginFormData) => {
  const { email, password, room } = loginFormData;
  return (dispatch) => {
    dispatch(login(room));

    return axios
      .post("https://academlo-chat.herokuapp.com/api/users/login", {
        email,
        password,
      })
      .then((res) => dispatch(loginSuccess(res.data)))
      .catch((err) => dispatch(loginFail(err)));
  };
};

export const signup = (room) => ({
  type: chatActionTypes.signup,
  payload: room,
});

export const signupSuccess = (auth) => ({
  type: chatActionTypes.signupSuccess,
  payload: auth,
});

export const signupFail = (err) => ({
  type: chatActionTypes.signupFail,
  payload: err,
});

// signup thunk

export const signupThunk = (signupFormData) => {
  const { email, username, password, room } = signupFormData;
  return (dispatch) => {
    dispatch(signup(room));

    return axios
      .post("https://academlo-chat.herokuapp.com/api/users/login", {
        email,
        username,
        password,
      })
      .then((res) => dispatch(signupSuccess(res)))
      .catch((err) => signupFail(err));
  };
};
