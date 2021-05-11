import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth, createUserProfileDocument, googleProvider } from '../../firebase/firebase.utils';

import UserActionTypes from './user.types';
import { googleSignInSuccess, googleSignInFailure } from './user.actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnap = yield userRef.get();
    yield put(googleSignInSuccess({ id: userSnap.id, ...user }));
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}