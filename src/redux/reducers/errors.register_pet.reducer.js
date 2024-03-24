import { combineReducers } from 'redux';

// requestMeetMessage holds the string that will display
// on the request Meet&Greet screen if there's an error
const registerPetMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REGISTER_PET_ERROR':
      return '';
    case 'REGISTER_PET_FAILED':
      return "Oops! The Pet Registration didn't go through. Please try again!";
    default:
      return state;
  }
};

// make one object
// these will be on the redux state at:
// state.errors.requestMeetMessage
export default combineReducers({
  registerPetMessage,
});
