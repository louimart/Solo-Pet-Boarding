import { combineReducers } from 'redux';

// requestMeetMessage holds the string that will display
// on the request Meet&Greet screen if there's an error
const requestMeetMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REQUEST_MEET_ERROR':
      return '';
    case 'REQUEST_MEET_FAILED':
      return "Oops! The request didn't go through. Please try again!";
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  requestMeetMessage,
});
