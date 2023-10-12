import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import kanjiSaga from './kanji.saga';
import postKanji from './postKanji.saga';
import getStatus from './getStatus.saga';
import getMeanings from './getMeanings.saga';
import getKun from './getKun.saga';
import getOn from './getOn.saga';
import getWords from './getWords.saga';
import getNotes from './getNotes.saga';
import putStatus from './putStatus.saga';

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
    takeEvery("GET_STATUS", getStatus),
    takeEvery("GET_MEANINGS", getMeanings),
    takeEvery("GET_KUN", getKun),
    takeEvery("GET_ON", getOn),
    takeEvery("GET_WORDS", getWords),
    takeEvery("GET_NOTES", getNotes),
    takeEvery("UPDATE_STATUS", putStatus),
  ]);
}
