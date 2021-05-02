import { takeLatest, put, call } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../actions/types';
import { loginSuccess, loginFailure } from '../actions/auth';

// TODO
function* loginSaga(action) {
    try {
        const data = yield call(_ => null); // pass callback of fetching data 
        yield put(loginSuccess(action.payload))
    }
    catch (error) {
        yield put(loginFailure(error))
    }
}

function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
};

export {
    watchLogin
}