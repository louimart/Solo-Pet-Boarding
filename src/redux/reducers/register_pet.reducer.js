const registerPetReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_PET':
      return action.payload;
    default:
      return state;
  }
};

// Meet & Greet Request will be on the redux state at:
// state.request_meet
export default registerPetReducer;