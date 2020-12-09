export const dataReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        avatarData: action.payload,
      };
    case "CHANGE_AVATAR_STATE":
      return {
        ...state,
        avatarState: action.payload,
      };
    default:
      return state;
  }
};
