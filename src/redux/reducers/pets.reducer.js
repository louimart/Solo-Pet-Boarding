const petsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PETS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default petsReducer;
