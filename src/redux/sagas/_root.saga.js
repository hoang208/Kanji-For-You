import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import kanjiSaga from './kanji.saga';
import postKanji from './postKanji.saga';
import getCollection from './getCollection.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    takeEvery("GET_KANJI", kanjiSaga),
    takeEvery("POST_KANJI", postKanji),
    takeEvery("GET_COLLECTION", getCollection)
  ]);
}
