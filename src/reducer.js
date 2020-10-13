export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USERS: "SET_USERS",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USERS:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
