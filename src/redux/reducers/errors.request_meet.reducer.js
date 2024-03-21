import { combineReducers } from 'redux';

// requestMeetMessage holds the string that will display
// on the request Meet&Greet screen if there's an error
const requestMeetMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REQUEST_MEET_ERROR':
      return '';
    case 'REQUEST_MEET_FAILED':
      return "Oops! The Meet Request didn't go through. Please try again!";
    default:
      return state;
  }
};

// make one object
// these will be on the redux state at:
// state.errors.requestMeetMessage
export default combineReducers({
  requestMeetMessage,
});
