import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* requestMeet(action) {
  try {
    // clear any existing error on the request page
    yield put({ type: 'CLEAR_REQUEST_MEET_ERROR' });
    // passes the username and password from the payload to the server
    yield axios.post('/api/request_meet', action.payload);
    console.log('submitted for POST', action.payload);
  }
  catch (error) {
  console.log('Error with request Meet & Greet:', error);
  yield put({ type: 'REQUEST_MEET_FAILED' });
  }
};

function* requestMeetSaga() {
  yield takeLatest('POST_REQUEST_MEET', requestMeet);
}

export default requestMeetSaga;