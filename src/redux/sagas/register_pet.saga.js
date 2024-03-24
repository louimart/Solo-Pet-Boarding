import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* registerPet(action) {
  try {
    // clear any existing error on the request page
    yield put({ type: 'CLEAR_REGISTER_PET_ERROR' });
    // passes Pet Registration info to server
    yield axios.post('/api/register_pet', action.payload);
    // // returns the posted Pet Registration Data
    // if (response.status === 201) {
    //   const registerPetResponse = response.data;
    //   console.log('RegisterPetResponse DATA', registerPetResponse)
    //   // yield put({type: 'POST_USER_PET', payload: registerPetId })
    // }
  }
  catch (error) {
  console.log('Error with Registering Pet:', error);
  yield put({ type: 'REGISTER_PET_FAILED' });
  }
};

function* registerPetSaga() {
  yield takeLatest('REGISTER_PET', registerPet);
}

export default registerPetSaga;