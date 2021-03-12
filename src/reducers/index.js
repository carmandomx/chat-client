import { chatActionTypes } from "../actions";

const INITIAL_STATE = {
  messages: [],
  isLoading: false,
  user: {
    id: "",
    username: "",
    token: "",
  },
  access: false,
  roomToJoin: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chatActionTypes.login:
      return {
        ...state,
        isLoading: true,
        roomToJoin: action.payload,
      };

    case chatActionTypes.loginSuccess:
      return {
        ...state,
        user: action.payload.user,
        access: action.payload.access,
        isLoading: false,
      };

    case chatActionTypes.loginFail:
      return {
        ...state,
        isLoading: false,
        access: false,
      };

    default:
      return state;
  }
};
