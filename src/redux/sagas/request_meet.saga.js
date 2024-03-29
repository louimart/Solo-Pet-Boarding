import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* requestMeet(action) {
  try {
    // clear any existing error on the request page
    yield put({ type: 'CLEAR_REQUEST_MEET_ERROR' });
    // passes the Meet Request data from the payload to the server
    const response = yield axios.post('/api/request_meet', action.payload)
    // returns the posted Meet Request data's ID.
    if (response.status === 201) {
      const requestMeetId = response.data.id;
      console.log('Response ID', requestMeetId)
      yield put({type: 'POST_REQUEST_MEET', payload: requestMeetId })
    }
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