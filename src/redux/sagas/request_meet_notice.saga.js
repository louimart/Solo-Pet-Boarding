import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* requestMeetNotice(action) {
  try {
    // Get the Meet Request
    const requestMeetResponse = yield axios.get(
      `/api/request_meet/${action.payload}`
    );
    console.log('is requestMeetResponse:', requestMeetResponse)
    // set the value of the reducer
    yield put({
      type: 'SET_REQUEST_MEET',
      payload: requestMeetResponse.data,
    });
  } catch (error) {
    console.log('Error getting request Meet & Greet Notice:', error);
    yield put({ type: 'REQUEST_MEET_FAILED' });
  }

//   try {
//     // clear any existing error on the request page
//     // yield put({ type: 'CLEAR_REQUEST_MEET_ERROR' });
//     // passes the username and password from the payload to the server
//     yield axios.get('/api/request_meet/:id', action.payload);
//     console.log(action.payload);
//   } catch (error) {
//     console.log('Error getting request Meet & Greet Notice:', error);
//     yield put({ type: 'REQUEST_MEET_FAILED' });
//   }
}

function* requestMeetNoticeSaga() {
  yield takeLatest('FETCH_MEET_REQUEST', requestMeetNotice);
}

export default requestMeetNoticeSaga;
