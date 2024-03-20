const requestMeetReducer = (state = {}, action) => {
  switch (action.type) {
    case 'POST_REQUEST_MEET':
      return action.payload;
    default:
      return state;
  }
};

// Meet & Greet Request will be on the redux state at:
// state.request_meet
export default requestMeetReducer;